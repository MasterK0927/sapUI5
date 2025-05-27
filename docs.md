- We have to first create the manifest.json file.
- declaration is like 

{
	"sap.app":{
		"id":"jerry",
		"type": "application"
	}
}

Here, id is something that we can change and keep as per our convienence.

- Then we need to create `index.html` file for start writing the code

if we add something like 
<script src="https://ui5.sap.com/resources/sap-ui-core.js"></script>
it is called sap ui5 bootstrapping, that dynamically loads all the sap ui5 related components into the project

- by using the class, we can change the background color of the page, the theme defined in the script loads the css, so its pre applied and pre defined

- ./ is the current working directory
- so we define a name to the app, as the rootdirectory for referencing any files relative to that easily.

- Adding a button to the page
```html
<button id="myButton">Click Me</button>
```
- We can add a button to the page using the following code
```html
<script>
	sap.ui.getCore().attachInit(function () {
		new sap.m.Button({
			text: "Click Me",
			press: function () {
				alert("Button clicked!");
			}
		}).placeAt("content");
	});
</script>
```
this means that when the sap ui5 core is initialized, we create a new button and place it at the content area of the page.

- The `placeAt` method is used to place the button in the content area of the page, which is defined in the `index.html` file as a div with id "content".
- The `press` event is used to define the action that will be performed when the button is clicked. In this case, it will show an alert with the message "Button clicked!".
- The `text` property is used to set the text that will be displayed on the button.
- The `sap.m` library is used to create mobile-friendly UI5 controls, and the `Button` control is one of the many controls available in this library.
- The `sap.ui.getCore().attachInit` method is used to attach a function that will be called when the UI5 core is initialized. This is where we create and place the button on the page.
- The `sap.ui.getCore()` method is used to get the UI5 core instance, which is responsible for managing the lifecycle of UI5 applications and controls.

Syntax for creating control object
```javascript
var oObjectName = new library.Class(sId, {
	prop: value,
	event: function() {
		// event handler code
	}
})
```

## Working architecture of SAP UI5
- The architecture of SAP UI5 is based on the Model-View-Controller (MVC) design pattern, which separates the application logic into three interconnected components: the model, the view, and the controller.
- The model represents the data and business logic of the application, the view is responsible for the presentation layer, and the controller handles user interactions and updates the model and view accordingly.

- I/O view screens -> processing controller app logic -> data model stores app data

- Data Binding: In SAP UI5, data binding is the process of connecting the model to the view, allowing for automatic updates between the two. This means that when the data in the model changes, the view is automatically updated to reflect those changes, and vice versa. There is no need of controller in this case. There are 4 types of data binding in SAP UI5:
  - One-way binding: The view is updated when the model changes, but not the other way around.
  - Two-way binding: Both the model and view are updated when either one changes.
  - One-time binding: The view is updated only once when the model is first bound to it.
  - List binding: Used for displaying lists of data, where each item in the list is bound to a model object.

  - **Views:** View are the visual representation of the application, and they are responsible for displaying data to the user. In SAP UI5, views can be created using XML, HTML, or JavaScript. The view is defined in a separate file and is responsible for rendering the UI components.

- **Controllers:** Controllers are responsible for handling user interactions and updating the model and view accordingly. In SAP UI5, controllers are defined in separate JavaScript files and are associated with a specific view. The controller contains the logic for handling events, such as button clicks or input changes, and updating the model and view based on those events.

- **Models:** Models are responsible for managing the data and business logic of the application. In SAP UI5, models can be created using JSON, XML, OData and Resource Model. The model is responsible for providing data to the view and updating the data based on user interactions.

## Creating the first view
- To create a view in SAP UI5, we need to create a new XML file that defines the layout and structure of the view. The XML file should be placed in the `view` folder of the project.
- The XML file should contain the following code:
```xml
<mvc:View
	controllerName="myApp.controller.Main"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<Page title="My First View">
		<content>
			<Button text="Click Me" press="onButtonPress"/>
		</content>
	</Page>
</mvc:View>
```
- In this code, we define a new view using the `mvc:View` tag, and we specify the controller name using the `controllerName` attribute. We also define the layout of the view using the `Page` and `Button` tags.
- The `xmlns:mvc` and `xmlns` attributes are used to define the namespaces for the XML file. The `xmlns:mvc` attribute is used to define the namespace for the MVC framework, and the `xmlns` attribute is used to define the namespace for the SAP UI5 controls.

- The `Page` tag is used to create a new page in the view, and the `Button` tag is used to create a new button. The `text` attribute is used to set the text that will be displayed on the button, and the `press` attribute is used to specify the event handler function that will be called when the button is clicked.
- The `onButtonPress` function is defined in the controller file, and it will be called when the button is clicked. The controller file should be placed in the `controller` folder of the project.
- The controller file should contain the following code:
```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("myApp.controller.Main", {
		onButtonPress: function () {
			alert("Button clicked!");
		}
	});
});
```
- In this code, we define a new controller using the `Controller.extend` method, and we specify the controller name using the `myApp.controller.Main` string. We also define the `onButtonPress` function, which will be called when the button is clicked.
- The `sap.ui.define` method is used to define a new module in SAP UI5, and it takes an array of dependencies as its first argument. In this case, we are importing the `Controller` module from the `sap/ui/core/mvc` namespace.
- The `Controller` module provides the base functionality for creating controllers in SAP UI5, and it is used to define the controller class.
- The `Controller.extend` method is used to create a new controller class that extends the base `Controller` class. The first argument is the name of the controller, and the second argument is an object that contains the methods and properties of the controller.
- The `onButtonPress` function is defined as a method of the controller class, and it will be called when the button is clicked. In this case, it will show an alert with the message "Button clicked!".
- The `alert` function is a built-in JavaScript function that displays an alert dialog with the specified message.
- The `myApp` namespace is used to define the application name, and it should be consistent across all files in the project. This helps to avoid naming conflicts and makes it easier to organize the code.
- The `controller` folder should contain all the controller files for the application, and the `view` folder should contain all the view files. This helps to keep the code organized and makes it easier to maintain.
- The `index.html` file should be updated to include the new view and controller files. The updated `index.html` file should contain the following code:
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>My First SAP UI5 App</title>
	<script src="https://ui5.sap.com/resources/sap-ui-core.js"
		id="sap-ui-bootstrap"
		data-sap-ui-theme="sap_belize"
		data-sap-ui-libs="sap.m"
		data-sap-ui-async="true"
		data-sap-ui-compatVersion="edge"
		data-sap-ui-preload="async">
	</script>
	<script>
		sap.ui.getCore().attachInit(function () {
			sap.ui.xmlview({
				viewName: "myApp.view.Main"
			}).placeAt("content");
		});
	</script>
	<link rel="stylesheet" href="https://ui5.sap.com/resources/sap.ui.core/themes/sap_belize/sap.ui.core.css">
	<link rel="stylesheet" href="https://ui5.sap.com/resources/sap.m/themes/sap_belize/sap.m.css">
</head>
<body class="sapUiBody">
	<div id="content"></div>
</body>
</html>
```

- View can be written in JS
```javascript
sap.ui.define(["module1", "module2, ..."], function(oDep1, oDep2, ...) {
	"use strict";
	return {
		// view code
	};
});
```
- General syntax of writing a view in XML
```xml
<mvc:View
	controllerName="myApp.controller.Main"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<Page title="My First View">
		<content>
			<Button text="Click Me" press="onButtonPress"/>
		</content>
	</Page>
</mvc:View>
```

- **Controller Syntax**
```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(oController) {
	"use strict";
	// controller code
	return oController.extend("path", {
		func1: function() {
			// code
		},
		func2: function() {
			// code
		},
		// more functions
	});
});

- "use strict" is a directive that enables strict mode in JavaScript, which helps to catch common coding errors and improves performance by enforcing stricter parsing and error handling.

**Some Rules**
- In order to make a controller class, we must inherit from standard SAP UI5 module called "sap.ui.core.mvc.Controller" in SAP UI5 class can be converted to a module by replacing dot with slash

- In JS, extend keyword represents inheritance, so we can use it to inherit from the base class. The first argument is the name of the controller, and the second argument is an object that contains the methods and properties of the controller.
```
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("myApp.controller.Main", {
		onButtonPress: function () {
			alert("Button clicked!");
		}
	});
});
```

- Whenever we see a proprty in the controll class, there will be a setter and getter method for that property. If we have setter method, we can have setValue and for getter method, we can have getValue.

- If we see an event on a control class, we will have detachEvent, attachEvent, and fireEvent methods for that event for making function work dynamically.

- We can obtain the object of a control class created in the view. We must never use the `document.getElementById` method to obtain the object of a control class. Instead, we can use the `byId` method of the controller class to obtain the object of a control class created in the view.
```javascript
var oButton = this.getView().byId(controlID);
```
As getElementById is a DOM method, and returns html element, but we need sap ui5 object, so we use byId method to obtain the object of a control class created in the view.

- We can obtain the object of running instance of SAP UI5 application using `sap.ui.getCore()` method. This method returns the core object of the SAP UI5 application, which is responsible for managing the lifecycle of UI5 applications and controls.
```javascript
var oCore = sap.ui.getCore();
```
- We can also use `this.getView().getModel()` method to obtain the model object of the view. This method returns the model object that is associated with the view, which can be used to access and manipulate the data in the model.
```javascript
var oModel = this.getView().getModel();
```
- We can also use `this.getView().getController()` method to obtain the controller object of the view. This method returns the controller object that is associated with the view, which can be used to access and manipulate the data in the controller.
```javascript
var oController = this.getView().getController();
```
- We can also use `this.getView().getId()` method to obtain the ID of the view. This method returns the ID of the view, which can be used to identify the view in the application.
```javascript
var sViewId = this.getView().getId();
```
- We can also use `this.getView().getViewName()` method to obtain the name of the view. This method returns the name of the view, which can be used to identify the view in the application.
```javascript
var sViewName = this.getView().getViewName();
```
- We can also use `this.getView().getViewData()` method to obtain the view data. This method returns the view data that is associated with the view, which can be used to access and manipulate the data in the view.
```javascript
var oViewData = this.getView().getViewData();
```
- We can also use `this.getView().getBindingContext()` method to obtain the binding context of the view. This method returns the binding context that is associated with the view, which can be used to access and manipulate the data in the model.
```javascript
var oBindingContext = this.getView().getBindingContext();
```
- We can also use `this.getView().getBindingContextPath()` method to obtain the binding context path of the view. This method returns the binding context path that is associated with the view, which can be used to access and manipulate the data in the model.
```javascript
var sBindingContextPath = this.getView().getBindingContextPath();
```
- We can also use `this.getView().getModelName()` method to obtain the model name of the view. This method returns the model name that is associated with the view, which can be used to access and manipulate the data in the model.
```javascript
var sModelName = this.getView().getModelName();
var oModel = this.getView().getModel(sModelName);
var sOutput = oModel.getProperty("/output");
```

**While using XML views, recommended approach will be to get the control object using the view object `this.getView()`, here `this` means object of the controller class, within the controller class this will reference to current class object**
```javascript
var oButton = this.getView().byId("myButton");
```

- **Step 1**
Get the running instance of the application
```javascript
var oApp = sap.ui.getCore();
```
- **Step 2**
Get the object of the control class
```javascript
var oButton = oApp.byId("myButton");
```
- **Step 3**
Get the value of that control class
```javascript
var sValue = oButton.getValue();
```

 - Always use SAP UI5 methods to obtain the object of a control class, and never use DOM methods like `document.getElementById` to obtain the object of a control class. This is because SAP UI5 controls are not standard HTML elements, and they have their own lifecycle and event handling mechanisms that are managed by the SAP UI5 framework.

 ## OOPs basic concepts
 Association, is a relationship between 2 classes so our entire app can work.
 - Aggregation: Lose coupling, both objects can function independently, should have relationship.
 - Composition: Strong coupling, both objects are dependent on each other, if one object is destroyed, the other object will also be destroyed.

## XML Views

- XML views are a way to define the layout and structure of a SAP UI5 application using XML syntax. XML views are more declarative and easier to read than JavaScript views, and they allow for better separation of concerns between the view and controller.

- XML views are defined using the `mvc:View` tag, and they can contain various UI controls and layout elements. The XML view is then associated with a controller that contains the logic for handling user interactions and updating the model and view.

```xml
<mvc:View
	controllerName="myApp.controller.Main"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<Page title="My First View">
		<content>
			<Button text="Click Me" press="onButtonPress"/>
		</content>
	</Page>
</mvc:View>
```
- In this code, we define a new XML view using the `mvc:View` tag, and we specify the controller name using the `controllerName` attribute. We also define the layout of the view using the `Page` and `Button` tags.
- The `xmlns:mvc` and `xmlns` attributes are used to define the namespaces for the XML file. The `xmlns:mvc` attribute is used to define the namespace for the MVC framework, and the `xmlns` attribute is used to define the namespace for the SAP UI5 controls.
- The `Page` tag is used to create a new page in the view, and the `Button` tag is used to create a new button. The `text` attribute is used to set the text that will be displayed on the button, and the `press` attribute is used to specify the event handler function that will be called when the button is clicked.
- The `onButtonPress` function is defined in the controller file, and it will be called when the button is clicked. The controller file should be placed in the `controller` folder of the project.
- The controller file should contain the following code:
```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("myApp.controller.Main", {
		onButtonPress: function () {
			alert("Button clicked!");
		}
	});
});
```
- In this code, we define a new controller using the `Controller.extend` method, and we specify the controller name using the `myApp.controller.Main` string. We also define the `onButtonPress` function, which will be called when the button is clicked.
- The `sap.ui.define` method is used to define a new module in SAP UI5, and it takes an array of dependencies as its first argument. In this case, we are importing the `Controller` module from the `sap/ui/core/mvc` namespace.
- The `Controller` module provides the base functionality for creating controllers in SAP UI5, and it is used to define the controller class.
- The `Controller.extend` method is used to create a new controller class that extends the base `Controller` class. The first argument is the name of the controller, and the second argument is an object that contains the methods and properties of the controller.
- The `onButtonPress` function is defined as a method of the controller class, and it will be called when the button is clicked. In this case, it will show an alert with the message "Button clicked!".
- The `alert` function is a built-in JavaScript function that displays an alert dialog with the specified message.
- The `myApp` namespace is used to define the application name, and it should be consistent across all files in the project. This helps to avoid naming conflicts and makes it easier to organize the code.
- The `controller` folder should contain all the controller files for the application, and the `view` folder should contain all the view files. This helps to keep the code organized and makes it easier to maintain.
- The `index.html` file should be updated to include the new view and controller files. The updated `index.html` file should contain the following code:
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>My First SAP UI5 App</title>
	<script src="https://ui5.sap.com/resources/sap-ui-core.js"
		id="sap-ui-bootstrap"
		data-sap-ui-theme="sap_belize"
		data-sap-ui-libs="sap.m"
		data-sap-ui-async="true"
		data-sap-ui-compatVersion="edge"
		data-sap-ui-preload="async">
	</script>
	<script>
		sap.ui.getCore().attachInit(function () {
			sap.ui.xmlview({
				viewName: "myApp.view.Main"
			}).placeAt("content");
		});
	</script>
	<link rel="stylesheet" href="https://ui5.sap.com/resources/sap.ui.core/themes/sap_belize/sap.ui.core.css">
	<link rel="stylesheet" href="https://ui5.sap.com/resources/sap.m/themes/sap_belize/sap.m.css">
</head>
<body class="sapUiBody">
	<div id="content"></div>
</body>
</html>
```
- In this code, we include the SAP UI5 core library and specify the theme and libraries that we want to use. We also define a script that will be executed when the SAP UI5 core is initialized, which creates a new XML view and places it in the content area of the page.
- The `sap.ui.xmlview` method is used to create a new XML view, and the `placeAt` method is used to place the view in the content area of the page. The `viewName` attribute specifies the name of the view that we want to create.
- The `sap.ui.getCore().attachInit` method is used to attach a function that will be called when the UI5 core is initialized. This is where we create and place the XML view on the page.
- The `link` tags are used to include the CSS files for the SAP UI5 core and the SAP UI5 mobile library, which define the styles for the UI components.
- The `body` tag contains a `div` element with the ID "content", which is where the XML view will be placed when it is created.
- The `sapUiBody` class is used to apply the default styles for the body of the SAP UI5 application.
- The `sap.ui.core.mvc` namespace is used to define the MVC framework in SAP UI5, and it provides the base classes and methods for creating views and controllers.
- The `sap.m` namespace is used to define the mobile library in SAP UI5, which provides mobile-friendly UI controls and layout elements.
- The `sap.ui.core` namespace is used to define the core library in SAP UI5, which provides the base functionality for creating UI5 applications and controls.
- The `sap.ui.core.mvc.View` class is used to define the base class for all views in SAP UI5, and it provides methods for managing the lifecycle of the view and handling events.
- The `sap.ui.core.mvc.Controller` class is used to define the base class for all controllers in SAP UI5, and it provides methods for managing the lifecycle of the controller and handling events.
- The `sap.ui.core.Component` class is used to define the base class for all components in SAP UI5, and it provides methods for managing the lifecycle of the component and handling events.
- The `sap.ui.core.ComponentContainer` class is used to define a container for components in SAP UI5, and it provides methods for managing the lifecycle of the component and handling events.
- The `sap.ui.core.ComponentSupport` class is used to define the base class for all components in SAP UI5, and it provides methods for managing the lifecycle of the component and handling events.
- The `sap.ui.core.ComponentMetadata` class is used to define the metadata for components in SAP UI5, and it provides methods for managing the lifecycle of the component and handling events.
- The `sap.ui.core.ComponentRegistry` class is used to define the registry for components in SAP UI5, and it provides methods for managing the lifecycle of the component and handling events.
- The `sap.ui.core.ComponentContainer` class is used to define a container for components in SAP UI5, and it provides methods for managing the lifecycle of the component and handling events.

- Should have one controller per view, and the name of the controller should be the same as the name of the view, with the suffix "Controller" added to it. For example, if the view is named "Main.view.xml", the controller should be named "Main.controller.js".
- The controller should be placed in the `controller` folder of the project, and the view should be placed in the `view` folder of the project. This helps to keep the code organized and makes it easier to maintain.
- The controller should be defined using the `sap.ui.define` method, and it should extend the `sap.ui.core.mvc.Controller` class. This allows the controller to inherit the base functionality for creating controllers in SAP UI5.

- When we create ui controls, at runtime the xml view id will be the idView-controlID

So we can't use the `sap.ui.getCore().byId("myButton")` method to get the button object, instead we can use `this.getView().byId("myButton")` method to get the button object.

----------------------------

- A control class always starts with capital letter, and the file name should be the same as the control class name, with the suffix ".js" added to it. For example, if the control class is named "MyButton", the file name should be "MyButton.js".

- An aggregation name always starts with small letter, and the file name should be the same as the aggregation name, with the suffix ".js" added to it. For example, if the aggregation name is "myButton", the file name should be "myButton.js".

- Aggregation always follows its parent namespace

-----------------------------

**Model**

- A model is a data structure that represents the data in the application. In SAP UI5, models can be created using JSON, XML, OData, and Resource Model. The model is responsible for providing data to the view and updating the data based on user interactions.
- Models can be created using the `sap.ui.model` namespace, and they can be bound to views and controls to display data. The model can also be used to update the data in the view based on user interactions.
- The model can be created using the `sap.ui.model.json.JSONModel` class, which provides methods for managing JSON data. The model can be bound to views and controls using the `bindElement` and `bindProperty` methods.
- The model can also be created using the `sap.ui.model.xml.XMLModel` class, which provides methods for managing XML data. The model can be bound to views and controls using the `bindElement` and `bindProperty` methods.
- The model can also be created using the `sap.ui.model.odata.v2.ODataModel` class, which provides methods for managing OData data. The model can be bound to views and controls using the `bindElement` and `bindProperty` methods.
- The model can also be created using the `sap.ui.model.resource.ResourceModel` class, which provides methods for managing resource data. The model can be bound to views and controls using the `bindElement` and `bindProperty` methods.

- Client side model are the models that are created and managed in the client-side application, and they are used to store and manipulate data in the application. Client-side models can be created using JSON, XML, OData, and Resource Model. Best suited for small data sets and simple applications.

- Server side model are the models that are created and managed in the server-side application, and they are used to store and manipulate data in the application. Server-side models can be created using OData, and they are used to access and manipulate data from a remote server. Best suited for large data sets and complex applications.

Server side model is used to communicate with the sap system

Steps for implementing model

1. Create a brand new model object
```javascript
var oModel = new sap.ui.model.json.JSONModel();
var oModel = new sap.ui.model.xml.XMLModel();
var oModel = new sap.ui.model.odata.v2.ODataModel();
var oModel = new sap.ui.model.resource.ResourceModel();
```
2. Set the data or load data inside the model
```javascript
oModel.setData({
		name: "John Doe",
		age: 30
	});
```
or
```javascript
oModel.loadData("data.json");
```
or
```javascript
oModel.loadData("/path/to/odata/service");
```
or
```javascript
oModel.loadData("i18n/i18n.properties");
```
3. Make the model aware of the application, so it can use it
```javascript
// entire app
sap.ui.getCore().setModel(oModel);
```
or
```javascript
// specific view
this.getView().setModel(oModel);
```
or
```javascript
// specific control
this.getView().byId("myControl").setModel(oModel);
```
or
```javascript
// specific control with name
this.getView().byId("myControl").setModel(oModel, "myModel");
```
or
```javascript
// specific control with name and type
this.getView().byId("myControl").setModel(oModel, "myModel", true);
```
or
```javascript
// specific control with name and type and async
this.getView().byId("myControl").setModel(oModel, "myModel", true, true);
```
-- Best option is to use the `setModel` method on the view or control where you want to use the model, as it allows for better encapsulation and avoids polluting the global namespace.

4. Data binding, bind the model to the view
```javascript
this.getView().bindElement("/path/to/data");
```
5. Use the model in the view
```xml
<mvc:View
	controllerName="myApp.controller.Main"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<Page title="My First View">
		<content>
			<Text text="{/name}"/>
			<Text text="{/age}"/>
			<Button text="Click Me" press="onButtonPress"/>
		</content>
	</Page>
</mvc:View>
```
6. Use the model in the controller
```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("myApp.controller.Main", {
		onInit: function () {
			var oModel = this.getView().getModel();
			console.log(oModel.getData());
		},
		onButtonPress: function () {
			alert("Button clicked!");
		}
	});
});
```
7. Use the model in the XML view
```xml
<mvc:View
	controllerName="myApp.controller.Main"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<Page title="My First View">
		<content>
			<Text text="{/name}"/>
			<Text text="{/age}"/>
			<Button text="Click Me" press="onButtonPress"/>
		</content>
	</Page>
</mvc:View>
```

Data Binding
- Every curly braces is a "/" and every array item is a (/index), this is the rule to make our model data called as xpath.
```xml
<Text text="{/name}"/>
<Text text="{/age}"/>
```
- The `Text` control is used to display text in the view, and the `text` attribute is used to bind the text to the model data. The binding syntax uses curly braces `{}` to indicate that the text should be bound to a property in the model.
- The `/` at the beginning of the binding path indicates that the binding should start from the root of the model data. If we want to bind to a specific property in the model, we can use the property name after the `/`, like `{/name}` or `{/age}`.
- The `Text` control will automatically update its text when the model data changes, thanks to the data binding mechanism in SAP UI5. This means that if we change the `name` or `age` properties in the model, the text displayed in the view will also change automatically.
- The `Text` control is a simple control that displays text in the view, and it can be used to display static or dynamic text. It is often used in combination with data binding to display data from the model in the view.
- The `Text` control can also be used to display formatted text, such as dates or numbers, by using the `formatOptions` attribute. For example, we can use the `formatOptions` attribute to format a date in the model as follows:
```xml
<Text text="{path: '/date', type: 'sap.ui.model.type.Date', formatOptions: {style: 'short'}}"/>
```
- In this example, the `path` attribute is used to bind the text to the `date` property in the model, and the `type` attribute is used to specify that the data type is a date. The `formatOptions` attribute is used to specify that the date should be formatted as a short date.
- The `Text` control can also be used to display HTML content by using the `htmlText` attribute instead of the `text` attribute. For example, we can use the `htmlText` attribute to display HTML content in the view as follows:
```xml
<Text htmlText="{/htmlContent}"/>
```
- In this example, the `htmlText` attribute is used to bind the HTML content to the `htmlContent` property in the model. The `Text` control will render the HTML content as HTML in the view.
- The `Text` control can also be used to display text with line breaks by using the `wrapping` attribute. For example, we can use the `wrapping` attribute to enable line breaks in the text as follows:
```xml
<Text text="{/longText}" wrapping="true"/>
```
- In this example, the `wrapping` attribute is set to `true`, which allows the text to wrap to the next line if it exceeds the width of the control. This is useful for displaying long text that may not fit in a single line.
- The `Text` control can also be used to display text with different styles by using the `textStyle` attribute. For example, we can use the `textStyle` attribute to set the text style to "Bold" as follows:
```xml
<Text text="{/boldText}" textStyle="Bold"/>
```
- In this example, the `textStyle` attribute is set to `Bold`, which will render the text in bold style. The `Text` control supports various text styles, such as "Bold", "Italic", "Underline", etc.
- The `Text` control can also be used to display text with different text alignments by using the `textAlign` attribute. For example, we can use the `textAlign` attribute to set the text alignment to "Center" as follows:
```xml
<Text text="{/centeredText}" textAlign="Center"/>
```	
--------------------
There is one more syntax of doing this
```xml
<Text text="{path: '/addressOfTheData'}"/>
```
- In this example, the `path` attribute is used to bind the text to the `addressOfTheData` property in the model. The `Text` control will automatically update its text when the model data changes, thanks to the data binding mechanism in SAP UI5.

- Compatible with the new syntaxes, and we need to specifically specify the type of data we are binding to. For example, if we are binding to a date, we can use the `type` attribute to specify that the data type is a date. The `formatOptions` attribute is used to specify how the date should be formatted.
```xml
<Text text="{path: '/date', type: 'sap.ui.model.type.Date', formatOptions: {style: 'short'}}"/>
```
In the bootstrap we need to add the following line
```html
data-sap-ui-bindingSyntax="complex"
```

Option 3: Dynamic binding
```xml
<Text text="{path: '/name', formatter: 'myApp.util.Formatter.formatName'}"/>
```
- In this example, the `path` attribute is used to bind the text to the `name` property in the model, and the `formatter` attribute is used to specify a custom formatter function that will be used to format the text. The formatter function should be defined in a separate module and should return the formatted text.
```javascript
sap.ui.define([
	"sap/ui/core/format/DateFormat"
], function (DateFormat) {
	"use strict";

	return {
		formatName: function (sName) {
			return sName.toUpperCase();
		}
	};
});
```

-----------------------------------------------------

## Working with model object

- The model object is a JavaScript object that represents the data in the application. The model object can be created using the `sap.ui.model.json.JSONModel` class, which provides methods for managing JSON data. The model object can be bound to views and controls using the `bindElement` and `bindProperty` methods.

- We can bring that object of model and use that model to change the data in the model.

- Once we change the data in the model, it will reflect back on the UI.

- we can use the `setProperty` method to set the value of a property in the model, and the `getProperty` method to get the value of a property in the model. The `setProperty` method takes two arguments: the path to the property and the new value for the property. The `getProperty` method takes one argument: the path to the property.
```javascript
var oModel = this.getView().getModel();
var sName = oModel.getProperty("/name");
oModel.setProperty("/name", "John Doe");
```
- In this example, we first get the model object using the `getView().getModel()` method. We then use the `getProperty` method to get the value of the `name` property in the model, and we use the `setProperty` method to set the value of the `name` property in the model to "John Doe". The changes will automatically reflect in the view due to data binding.
- We can also use the `setData` method to set the entire data object in the model, and the `getData` method to get the entire data object from the model. The `setData` method takes one argument: the new data object for the model. The `getData` method does not take any arguments.
```javascript
var oModel = this.getView().getModel();
var oData = oModel.getData();
oData.name = "John Doe";
oModel.setData(oData);
```
- In this example, we first get the model object using the `getView().getModel()` method. We then use the `getData` method to get the entire data object from the model, modify the `name` property in the data object, and finally use the `setData` method to set the modified data object back to the model. The changes will automatically reflect in the view due to data binding.

- We can also use the `refresh` method to refresh the model and update the view with the latest data. The `refresh` method does not take any arguments.
```javascript
var oModel = this.getView().getModel();
oModel.refresh();
```
- In this example, we first get the model object using the `getView().getModel()` method. We then use the `refresh` method to refresh the model and update the view with the latest data. This is useful when we have made changes to the model data outside of the data binding mechanism and want to ensure that the view reflects those changes.

- It removes the dependency of coupling with the id, and improves the overall modularity of the application.

- Q. When we make changes in the model, it reflects backs in the UI, vice versa is also possible?. When we change data on the UI, it reflects back in the model?

Binding modes make it possible to do this, there are 4 possible binding modes
- One way binding: The model data is bound to the view, and changes in the model will reflect in the view, but changes in the view will not reflect in the model.
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({
		name: "John Doe",
		age: 30
	});
	this.getView().setModel(oModel);
```
- Two way binding: The model data is bound to the view, and changes in the model will reflect in the view, and changes in the view will also reflect in the model. This is useful when we want to allow users to edit data in the view and have those changes reflected in the model. This is the default binding mode in SAP UI5.
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({
		name: "John Doe",
		age: 30
	});
	this.getView().setModel(oModel);
	this.getView().bindElement("/name");
```
- One time binding: The model data is bound to the view, and changes in the model will not reflect in the view, and changes in the view will not reflect in the model. This is useful when we want to display static data in the view that does not need to be updated.
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({
		name: "John Doe",
		age: 30
	});
	this.getView().setModel(oModel);
	this.getView().bindElement("/name", {
		mode: "OneTime"
	});
```
- One way to one way binding: The model data is bound to the view, and changes in the model will reflect in the view, but changes in the view will not reflect in the model. This is useful when we want to display data in the view that does not need to be updated.
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({
		name: "John Doe",
		age: 30
	});
	this.getView().setModel(oModel);
	this.getView().bindElement("/name", {
		mode: "OneWay"
	});
```
- One way to one time binding: The model data is bound to the view, and changes in the model will reflect in the view, but changes in the view will not reflect in the model. This is useful when we want to display data in the view that does not need to be updated.
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({
		name: "John Doe",
		age: 30
	});
	this.getView().setModel(oModel);
	this.getView().bindElement("/name", {
		mode: "OneTime"
	});
```
- Two way to one way binding: The model data is bound to the view, and changes in the model will reflect in the view, and changes in the view will not reflect in the model. This is useful when we want to display data in the view that does not need to be updated.
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({
		name: "John Doe",
		age: 30
	});
	this.getView().setModel(oModel);
	this.getView().bindElement("/name", {
		mode: "OneWay"
	});
```
- Two way to one time binding: The model data is bound to the view, and changes in the model will reflect in the view, and changes in the view will not reflect in the model. This is useful when we want to display data in the view that does not need to be updated.
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({
		name: "John Doe",
		age: 30
	});
	this.getView().setModel(oModel);
	this.getView().bindElement("/name", {
		mode: "OneTime"
	});
```

to change the default binding mode, we can use the `setDefaultBindingMode` method on the model object. The `setDefaultBindingMode` method takes one argument: the binding mode to set as the default binding mode for the model.
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setDefaultBindingMode("OneWay");
this.getView().setModel(oModel);
```
- In this example, we first create a new JSON model object using the `sap.ui.model.json.JSONModel` class. We then set the default binding mode to "OneWay" using the `setDefaultBindingMode` method. Finally, we set the model on the view using the `setModel` method.
- The `setDefaultBindingMode` method can be used to set the default binding mode for the model, which will be used for all bindings that do not specify a binding mode explicitly. This allows us to control the behavior of data binding in the application and ensure that it meets our requirements.

## modularization

- define the models inside the model/model.js folder for modularity.

- define the controllers inside the controller/controller.js folder for modularity.

- define the views inside the view/view.js folder for modularity.

- define the components inside the component/component.js folder for modularity.

-- 

- To reference the named model, we have to use `modelName >` in the value of the binding path. For example, if we have a model named "myModel", we can reference it in the binding path as follows:
```xml
<Text text="{myModel>/name}"/>
```

-----------------------------------------------------

## Global Variables .

- They are used to reduce the constant reuse of some commonly used variables.

So we declare some global variables in the controller, and then we can use them in the view using expression binding.

- Declaring a global variable
```javascript
var sGlobalVariable = "Hello World";
```

## Hook Functions

- Hook functions are special functions that are called at specific points in the lifecycle of a controller or view. They allow us to execute custom logic at these points, such as initializing data, handling events, or cleaning up resources.
- Hook functions are defined in the controller class, and they are automatically called by the SAP UI5 framework at the appropriate time. Some common hook functions include `onInit`, `onBeforeRendering`, `onAfterRendering`, and `onExit`.
- The `onInit` function is called when the controller is initialized, and it is used to perform any setup or initialization tasks, such as loading data or setting up event handlers.
```javascript
onInit: function () {
	this.getView().setModel(new sap.ui.model.json.JSONModel({
		name: "John Doe",
		age: 30
	}));
}
```
- The `onBeforeRendering` function is called before the view is rendered, and it is used to perform any tasks that need to be done before the view is displayed, such as updating data or modifying the view structure.
```javascript
onBeforeRendering: function () {
	var oModel = this.getView().getModel();
	oModel.setProperty("/name", "Jane Doe");
}
```
- The `onAfterRendering` function is called after the view is rendered, and it is used to perform any tasks that need to be done after the view is displayed, such as updating the UI or handling events.
```javascript
onAfterRendering: function () {
	var oButton = this.getView().byId("myButton");
	oButton.setText("Click Me");
}
```
- The `onExit` function is called when the controller is destroyed, and it is used to perform any cleanup tasks, such as removing event handlers or releasing resources.
```javascript
onExit: function () {
	var oModel = this.getView().getModel();
	oModel.destroy();
}
```
- Hook functions are an important part of the SAP UI5 framework, as they allow us to control the lifecycle of the controller and view, and to execute custom logic at specific points in the application flow. By using hook functions, we can ensure that our application behaves as expected and that it is responsive to user interactions.

## XML Model

- As we use xml data, so we have to use xml model to bind the data to the view. The XML model is a built-in model in SAP UI5 that allows us to work with XML data in a structured way.
- The XML model can be created using the `sap.ui.model.xml.XMLModel` class, which provides methods for managing XML data. The model can be bound to views and controls using the `bindElement` and `bindProperty` methods.
```javascript
var oModel = new sap.ui.model.xml.XMLModel();
oModel.loadData("data.xml");
this.getView().setModel(oModel);
```
- In this example, we first create a new XML model object using the `sap.ui.model.xml.XMLModel` class. We then load the XML data from a file named "data.xml" using the `loadData` method. Finally, we set the model on the view using the `setModel` method.

## Binding Types in SAP UI5
- **Property Binding:** Property binding is used to bind a property of a control to a property in the model. This allows the control to display data from the model and update its value when the model changes.
```xml
<!-- Binding of property of a control to the xpath -->
<Text text="{/name}"/>
```
- **Expression Binding:** Expression binding is used to bind a property of a control to an expression that can include multiple properties from the model. This allows for more complex data manipulation and formatting.
```xml
<!-- Binding logical expression to the xpath -->
<Text text="{= ${/firstName} + ' ' + ${/lastName} }"/>
```
- **Aggregation Binding:** Aggregation binding is used to bind a collection of items in the model to a control that can display multiple items, such as a list or table. This allows the control to display a dynamic list of items based on the data in the model.
```xml
<!--  -->
<List items="{/items}">
	<Item>
		<Text text="{name}"/>
	</Item>
</List>
```
- **Element Binding:** Element binding is used to bind a specific element in the model to a control. This allows the control to display data for a specific item in the model, such as a detail view for a selected item.
```xml
<mvc:View
	controllerName="myApp.controller.Detail"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<Page title="{/title}">
		<content>
			<Text text="{/description}"/>
		</content>
	</Page>
</mvc:View>
```

- JSON models are most widely used, xml models are used nearly to 0

 ---------------------------------

 **Aggregation Control**
- When we bind the aggregation of a control with a path, usually the child of an aggregated control will get binded with the properties of child node in model.

### Aggregation Table Control
- columns:
-- each column inside it is also a column class
-- tables will be viewed/displayed only when rows are binded to the column
-- We also have to specify the type of the column, that is the cell type of the table. For it we have another aggregation called `template`, using which we can define the control required for the template, and what kind of value it will be. So the format for it becomes
```xml
<mvc:View
    controllerName="testApp.controller.Main"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:f="sap.ui.layout.form"
    xmlns="sap.m"
    xmlns:t="sap.ui.table"
>
    <t:Table>
        <t:columns>
            <t:Column label="Emp Id">
                <t:template>
                    <Text text=""></Text>
                </t:template>
            </t:Column>
            <t:Column label="Emp Name">
                <t:template>
                    <Input value=""></Input>
                </t:template>
            </t:Column>
            <t:Column label="Emp Address">
                <t:template>
                    <Text text=""></Text>
                </t:template>
            </t:Column>
            <t:Column label="Emp Salary">
                <t:template>
                    <Text text=""></Text>
                </t:template>
            </t:Column>
        </t:columns>
    </t:Table>
    <f:SimpleForm>
        <f:content>
            <Label text="Emp Id" />
            <Input
                id="empId"
                value="{/empStr/empId}"
                placeholder="Enter Employee ID"
            />
            <Label text="Emp Name" />
            <Input
                id="empName"
                value="{model2>/empStr/empName}"
                placeholder="Enter Employee Name"
            />
            <Label text="Emp Salary" />
            <Input
                id="empSalary"
                value="{/empStr/empSalary}"
                placeholder="Enter Employee Salary"
            />
            <Label text="Emp Address" />
            <Input
                id="empAddress"
                value="{/empStr/empAddress}"
                placeholder="Enter Employee Address"
            />
        </f:content>
    </f:SimpleForm>
    <Button
        text="Click Me"
        icon="sap-icon://accept"
        press="onButtonPress"
    />
    <Button
        id="printButton"
        text="Print"
        icon="sap-icon://print"
        press="onButtonPress2"
    />
    <Switch 
        name="JustASwitch"
        state="false
        change="onSwitchChange"
    >
    </Switch>
</mvc:View>
```
-- Now we have to add `rows` aggregation to it
-- Rows can only be used with data binding

----------------------------------------------------------

## Element Binding

- In UI5, an element is a memory which is allocated during the aggregation binding. When we were performing aggregation binding, multiple rows were attached to the table, each row allocates a separate memory which is the `element`.

## Reusability of controllers code

- If we have to ensure that our controllers are reusable, we should follow best practices such as using component-based architecture and avoiding direct manipulation of the UI elements.

- We can create a base controller that contains common functionality and then extend it in other controllers. This allows us to reuse the code and avoid duplication.

- We can also create utility functions that can be used across multiple controllers. This allows us to encapsulate common functionality and avoid duplication.

- We can use the `sap.ui.define` method to define a module that contains the reusable code, and then use the `extend` method to create a new controller that inherits from the base controller.

```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("myApp.controller.BaseController", {
		onInit: function () {
			// Common initialization code
		},
		commonFunction: function () {
			// Common functionality
		}
	});
});
```
- In this example, we define a base controller named `BaseController` that extends the `sap.ui.core.mvc.Controller` class. The `onInit` method is a hook function that is called when the controller is initialized, and it can contain common initialization code. The `commonFunction` method is a reusable function that can be called from other controllers.
```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"myApp/controller/BaseController"
], function (Controller, BaseController) {
	"use strict";

	return BaseController.extend("myApp.controller.Main", {
		onInit: function () {
			BaseController.prototype.onInit.apply(this, arguments);
			// Additional initialization code for Main controller
		},
		onButtonPress: function () {
			this.commonFunction(); // Call the reusable function from BaseController
			alert("Button clicked!");
		}
	});
});
```
- In this example, we define a new controller named `Main` that extends the `BaseController`. The `onInit` method calls the `onInit` method of the base controller using `BaseController.prototype.onInit.apply(this, arguments)`, allowing us to reuse the common initialization code. The `onButtonPress` method calls the `commonFunction` from the base controller, demonstrating how we can reuse functionality across controllers.

## Best Practices
- Use the MVC architecture to separate concerns and keep the code organized.
- Use XML views for declarative UI definition and data binding.
- Use JSON models for client-side data storage and manipulation.
- Use OData models for server-side data access and manipulation.
- Use component-based architecture to encapsulate functionality and promote reusability.
- Use hook functions to manage the lifecycle of controllers and views.
- Use data binding to connect models to views and controls, allowing for automatic updates and synchronization.
- Use aggregation binding to display collections of items in controls like lists and tables.
- Use expression binding for complex data manipulation and formatting.
- Use utility functions and base controllers to encapsulate common functionality and promote code reuse.
- Use the `sap.ui.define` method to define modules and dependencies, promoting modularity and maintainability.
- Use the `sap.ui.getCore().getModel()` method to access the global model, and use `this.getView().getModel()` to access the model for a specific view.
- Use the `setModel` method to set models on views and controls, and use the `bindElement` and `bindProperty` methods for data binding.
- Use the `setProperty` and `getProperty` methods to manipulate model data, and use the `setData` and `getData` methods for working with entire data objects.
- Use the `refresh` method to update the view with the latest model data.
- Use the `setDefaultBindingMode` method to control the default binding mode for models, allowing for one-way, two-way, or one-time data binding.
- Use the `sap.ui.model` namespace to create and manage models, and use the appropriate model class for the data format (JSON, XML, OData, Resource).
- Use the `sap.ui.core.mvc.Controller` class to create controllers, and use the `sap.ui.core.mvc.View` class to create views.
- Use the `sap.ui.core.Component` class to create components, and use the `sap.ui.core.ComponentContainer` class to define containers for components.
- Use the `sap.ui.core.ComponentSupport` class to manage component lifecycle and events.
- Use the `sap.ui.core.ComponentMetadata` class to define metadata for components, such as dependencies, configuration, and routing.
- Use the `sap.ui.core.ComponentContainer` class to define containers for components, and use the `sap.ui.core.ComponentSupport` class to manage component lifecycle and events.
- Use the `sap.ui.core.ComponentMetadata` class to define metadata for components, such as dependencies, configuration, and routing.

**Basic Syntax**
```javascript
// BaseController.js
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("myApp.controller.Main", {
		onInit: function () {
			// Initialization code
		},
		onButtonPress: function () {
			alert("Button clicked!");
		}
	});
});
```
```xml
<!-- Main.view.xml -->
<mvc:View
	controllerName="myApp.controller.Main"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<Page title="My First View">
		<content>
			<Button text="Click Me" press="onButtonPress"/>
		</content>
	</Page>
</mvc:View>
```
```javascript
// Component.js
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("myApp.Component", {
		metadata: {
			manifest: "json"
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			var oModel = new JSONModel();
			oModel.setData({
				name: "John Doe",
				age: 30
			});
			this.setModel(oModel);
		}
	});
});
```
```xml
<!-- ComponentContainer.view.xml -->
<mvc:View
	controllerName="myApp.controller.ComponentContainer"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<ComponentContainer name="myApp"/>
</mvc:View>
```
```javascript
// ComponentContainer.controller.js
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("myApp.controller.ComponentContainer", {
		onInit: function () {
			// Initialization code
		}
	});
});
```

- Resource Model: Basically internationalisation wali bakchodi hai, usi ko bhaut hi jyada inflated form mai likha hua hai. Isko declare krne ke liye basically jaise we used to declare i18 standard files in web dev, waise hi ek `i18n.properties` wali file banani padegi. Aur usme saari i18n wali bakchodi dalni hogi.

```i18n.properties
XFLD_EMPID=Employee Id
XFLD_EMPNAME=Employee Name
XFLD_SAL=Salary
XFLD_CURR=Currency
XFLD_SMK=Smoker
XFLD_MSTAT=Marital Status
```

- Then use it in the models.js file, using the below syntax
```javascript
sap.ui.define(["sap/ui/model/resource/ResourceModel"], function(ResourceModel) {
	"use strict";
	return {
		createResourceModel: function() {
			var oResource = new ResourceModel({
				bundleUrl: "i18n/i18n.properties"
			});
			return oResource;	
		}
	}		
})
```

- Fir jaakr ke `Main.controller.js` mai ek function add kr do
```javascript
var oRm = models.createResourceModel();
sap.ui.getCore().setModel(oRm, "i18n");
```

- Ab isko main views wagera mai use krne ke liye, jyada kuch nhi krna hai, views mai jaakr ke `values` ko `{i18n>XFLD_EMPID}` se replace kr do

- Basically basecontroller agr use kr rhe hai, toh we can skip the use of controller directly and replace it with basecontroller in the main controller
