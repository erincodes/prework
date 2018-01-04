window.onload = function() {
	initShoppingList();
	/*Keep functions separate, only do one thing each.
	This will come in handy later if we want to add on as well.
	 */
};

function initShoppingList () {
	let form = document.getElementById("item-form");

	/* console.log(form);
	Did a console.log to ensure it was working. Open in broswer
	and "inspect element" to confirm good to go before proceeding.
	In the screencast they then deleted the console.log.
	Good practice to test code in small chunks to catch errors as you go.
	 */

	form.addEventListener("submit", (event) => {
			handleItemForm(event, form); /*form is defined outside
			of this function (above where it says let form = document....
			 therefore we have access to it due to scope */
		});
}

function handleItemForm(event, formRef) {
	if(event.preventDefault) {
		event.preventDefault ();
		/* prevents JS from refreshing the page as if
		we're sending the data to a backend database. Since
		we're NOT doing that, this prevents it.
		 */
		}
	// console.log("Event: ", event);
	/* console.log shows that all seems to be working and JS
	is not refreshing our page. Can delete the console.log.
	 */

	addItemToShoppingList();
	formRef.reset();

	return false;
}

function addItemToShoppingList() {
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");
	let id = getRandomInt(0, 10000000);

	// Creates list item html and appends to page.
	let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
	console.log("Item HTML: ", itemHtml);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);

	setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
	let deleteButton = document.getElementById("button"+id);
	deleteButton.addEventListener("click", () => {
		// console.log("DeleteButton Works");
		removeListItem(id);
	});
}

function createListItemHtml (itemName, itemAmount, id) {
	// line of code below with quotations does not seem to work
	return `<li id="item${id}">
${itemName} - ${itemAmount}
<button id="button${id}" type="button">Delete Item</button>
</li>`;
}

function removeListItem(id) {
	let listItem = document.getElementById("item"+id);
	listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
	//The maximum is exclusive and the minimum is inclusive
}