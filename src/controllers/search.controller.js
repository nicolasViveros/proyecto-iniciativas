import task from '../models/tasks.model.js';


// 1. Extract the categories from the article data and return them as an array,
// Since we want only unique values, we will use the Set data structure
// E.g. ["qwik", "react", "vue"]
export function getUniqueCountry(task) {
    const taskSet = new Set(task.map((task) => task.pais));
    return Array.from(categoriesSet);
  }

  // 2. Filter the articles based on the category
// E.g. "qwik" -> [{...}, {...}]
export function filterArticlesByCategory(
    task: Task,
    pais
  ) {
    return task.filter((task) => task.pais === pais);
  }