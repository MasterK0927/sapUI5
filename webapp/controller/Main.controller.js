sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "testApp/model/models",
    "sap/m/MessageToast"
], function (Controller, models, MessageToast) {
    "use strict";
    return Controller.extend("testApp.controller.Main", {
        onInit: function () {
            // for creating a global variable
            // this - represents the current class, since we are inside
            // our main controller class, this is the object of main controller class
            // onInit function is a hook which represents the constructor of this controller class
            // it will get called by SAP UI5 right after the class object is created
            // So any initialization code we can write here

            // create a new JSON model
            // var oModel = new sap.ui.model.json.JSONModel();
            // // set the data or load data inside the model
            // oModel.setData({
            //     "empStr": {
            //         "empId": "1234",
            //         "empName": "John",
            //         "empSalary": "50000",
            //         "empAddress": "New York"
            //     },
            //     "empArr": []
            // });
            // model1
            // var oModel = models.createJSONModel("model/mockdata/sample.json"); // using the model factory function
            // model2
            var oModel = models.createJSONModel("model/mockdata/sample2.json"); // using the model factory function
            // model3, the xml model
            // var oModel = models.createXMLModel("model/mockdata/demoData.xml"); // using the model factory function

            // set the model to the core
            // syntax 1: using static binding with model object
            // sap.ui.getCore().setModel(oModel);
            // if we set both the model to the core at once
            // we will use only the last model, as its the last set model/value
            sap.ui.getCore().setModel(oModel);
            // syntax 3: using dynamic binding with js direct method
            this.getView().byId("empSalary").bindValue("/empStr/empSalary");
            // syntax 4: using dynamic binding with js generic function
            this.getView().byId("empAddress").bindProperty("value", "/empStr/empAddress");
        },
        // // for getting ui5 object
        // onButtonPress: function() {
        //     this.getView().byId("empId").setValue("8080");
        //     this.getView().byId("empName").setValue("John Doe");
        //     this.getView().byId("empSalary").setValue("50000");
        // }
        // onBeforeRendering: function() {
        //     var oModel = sap.ui.getCore().getModel();
        //     var sData = oModel.getProperty("/empStr");
        //     if (sData.empName === "hehe") {
        //         this.getVirew().byId("printButton").setEnabled(false);
        //     }
        // },
        onAfterRendering: function () {
            $("#idMyXML--idSimple").fadeOut(1000).fadeIn(500);
        },
        onButtonPress2: function () {
            var oModel2 = sap.ui.getCore().getModel();
            var sData = oModel2.getProperty("/empStr");
            console.log("Employee ID: " + sData);
        },
        onButtonPress: function () {
            // get the model object from the core
            var oModel = sap.ui.getCore().getModel();
            // set the data inside the model
            // oModel.setProperty("/empStr/empId", "8080");
            // oModel.setProperty("/empStr/empName", "triple h");
            oModel.setProperty("/empStr", {
                "empId": "8080",
                "empName": "triple h",
                "empSalary": "60000",
                "empAddress": "Los Angeles"
            });
        },
        onSwitchChange: function (oEvent) {
            var bNewState = oEvent.getParameter("state");
            MessageToast.show("Switch is now " + (bNewState ? "On" : "Off"));
            var oView = this.getView();

            // Decide which model to use
            var oModel = bNewState
                ? sap.ui.getCore().getModel("model2")
                : sap.ui.getCore().getModel();
            
            oView.setModel(oModel);
        }
    });
})