function global() {
  return {
    isMobileMenuOpen: false,
    isDarkMode: false,
    themeInit() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        this.isDarkMode = true;
      } else {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        this.isDarkMode = false;
      }
    },
    themeSwitch() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        this.isDarkMode = false;
      } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        this.isDarkMode = true;
      }
    },
    json: Alpine.store('json', {}),
  };
}

document.addEventListener('alpine:init', () => {
  // Register a new Alpine.js directive for AJAX content injection
  Alpine.directive('include', async (el, { expression, modifiers }) => {
    try {
      // Fetch the content from the specified URL using the Fetch API
      const response = await fetch(expression)
      
      if (modifiers.includes('markdown')) {
        const content = await response.text()
        // Parse the Markdown content using the marked library
        const parsedContent = marked(content)

        // Inject the parsed content into the element using x-html directive
        el.innerHTML = parsedContent
        return
      }

      // Get the pure text response
      const content = await response.text()
      // Inject the fetched content into the element using x-html directive
      el.innerHTML = content
    } catch (error) {
      console.error('Error fetching content:', error)
    }
  })
  // Register a new Alpine.js directive for fetching and storing JSON content
  Alpine.directive('json', async (el, { expression, value }) => {
    try {
      // Fetch the content from the specified URL using the Fetch API
      const response = await fetch(expression)
      // Parse the response to JSON
      const jsonContent = await response.json()

      // Store the parsed JSON content in Alpine's store using the provided value name
      Alpine.store(value, jsonContent)
    } catch (error) {
      console.error('Error fetching content:', error)
    }
  });
})
