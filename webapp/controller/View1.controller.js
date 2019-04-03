sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.bindingtest.controller.View1", {
		onInit: function () {
//no help 
		},
		onRowClick:function(oEvent){
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext("Info");
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("SimpleFormChange354");
			oProductDetailPanel.bindElement({ path: sPath, model: "Info" });
		}
	});
});
