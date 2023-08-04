export default {
  /**
 * Gets the order of items by dependency using a topological sorting algorithm.
 * Uses a graph theory approach for sorting items while respecting their dependencies.
 * Items with the same dependency are simply sorted alphabetically, on the same line.
 * @param {Array} dependencies - A single dimensional array of dependencies between items.
 * @returns {String} The order of items by dependency.
 */
  getItemOrderByDependency(dependencies) {
    try {
      // Create an empty graph.
      const graph = {};

      // Indegree stores the number of incoming edges for each item.
      const indegree = {};

      // Build the graph and calculate the indegree for each item.
      for (const [dependency, item] of dependencies) {
        // Initialize an empty array for the item if it doesn't exist in the graph.
        if (!graph[dependency]) {
          graph[dependency] = [];
        }
        if (!graph[item]) {
          graph[item] = [];
        }

        // Add the dependency as an outgoing edge from the item in the graph.
        graph[dependency].push(item);

        // Initialize the indegree for the item if it doesn't exist.
        if (!indegree[item]) {
          indegree[item] = 0;
        }

        // Increment the indegree for the item as it depends on the current dependency.
        indegree[item] += 1;
      }

      // Output array.
      const output = [];

      // Create a queue to perform topological sorting.
      const queue = [];

      // Find all items with an indegree of 0 (no dependencies) then add them to the queue.
      for (const item in graph) {
        if (!indegree[item]) {
          queue.push(item);
        }
      }

      // Do the topological sort!
      while (queue.length > 0) {
        // Sort the same level of dependencies alphabetically, (default sort).
        queue.sort();

        // Get the current level of items from the queue.
        const currentItems = [...queue];
        queue.length = 0; // Clear the queue

        // Add this level of items to the output.
        output.push(currentItems.join(', '));

        // Process each item in this level.
        for (const currentItem of currentItems) {
          // Decrement the indegree of neighbors, and add them to the queue if indegree becomes 0
          for (const neighbor of graph[currentItem]) {
            indegree[neighbor] -= 1;
            if (indegree[neighbor] === 0) {
              queue.push(neighbor);

              // Remove neighboring indegree, no longer needed.
              delete indegree[neighbor];
            }
          }
        }
      }

      // join items in the array with a new line.
      return output.join('\n');
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}