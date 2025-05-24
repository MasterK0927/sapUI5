sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    "use strict";
    return {
        createJSONModel: function(filePath) {
            var oModel = new JSONModel();
            // oModel.setData({
            //     "empStr": {
            //         "empId": "1234",
            //         "empName": "John",
            //         "empSalary": "50000",
            //         "empAddress": "New York"
            //     },
            //     "empArr": []
            // });
            // we can also load data from a URL
            // oModel.loadData("path/to/your/data.json");
            // file will never change, as model is the object of data, and this file is just used for creating the model
            // oModel.loadData("model/mockdata/sample.json"); // assuming you have a sample.json file in the mockdata folder
            // for multiple models, we can pass filePath
            oModel.loadData(filePath);
            return oModel;
        }
    }
})