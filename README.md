# TodoList
*the link to project online* 
[![](https://img.shields.io/badge/Click_me_&#10138;-%2338DCCB?style=for-the-badge)](https://kseniiamarkiv.github.io/todo-list/)

### technologies and their versions
- [Angular CLI](https://github.com/angular/angular-cli) 16.2.0;
- Bootstrap 5.2;
- Angular Material, FormsModule and ReactiveFormsModule, ViewEncapsulation;
- Sass preprocessor;
- meta & OGP tags;
- Deploy by angular-cli-ghpages;

# $$\mathbb{\color{#38DCCB} How \ to \ interact \ with \ the \ Todo \ list}$$
> - By default app opens on "todo" filter, so shows also 2 lists (left and right) by "todo" filter.
> - If you click on an item, you move the item to "done" filter. There are present validations "Todo name cannot be empty", and "Todo name should be 33 characters or less." 
> - If you go to "all" or "done" filters, by pressing on the item you get a message about "Do you wanna delete this item?" "Yes" or "No"
> - You can add new elements by pressing the button "+ New Task". There are also present validations "Todo name cannot be empty", and "Todo name should be 33 characters or less." 
> - You can in all filters position use delete and edit functions.


## a Todo list has abilities like
- Display item list;
- Filtered items by **'all'**, **'todo'** and **'done'** actions;
- Capability to add, edit, save and delete items
- **Validation** – not allowing empty input fields and more than 33 characters in item;
- And a little bonus is the cute design 😉
- You can compare the design from **Figma** and the implemented code  [![](https://img.shields.io/badge/Click_me_&#10138;-brightgreen?style=for-the-badge)](https://www.figma.com/community/file/1271828665006307996/Todo-list)


## was a challenge for me
1. when I have been implementing save, delete and select item actions, forgot to make it by index. Therefore lists were not synchronized with each other.
2. I forgot about Module rules, Component rules (declaration)  - fix it


## was simple for me
1. as usual, design (especially by Bootstrap);
2. HTML5 semantic;
3. using **Angular Material** (although it's new for me);
4. performing validation
