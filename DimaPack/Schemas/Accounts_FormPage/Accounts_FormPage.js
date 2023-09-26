define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "RecommendedProductList",
				"values": {
					"selectedRows": "$RecommendedProductList_SelectedRows",
					"_filterOptions": {
						"from": [
							"RecommendedProductList",
							"RecommendedProductList_SelectedRows"
						],
						"expose": []
					},
					"selectionState": "$RecommendedProductList_SelectionState",
					"_selectionOptions": {
						"attribute": "RecommendedProductList_SelectionState"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityList",
				"values": {
					"selectedRows": "$OpportunityList_SelectedRows",
					"_filterOptions": {
						"from": [
							"OpportunityList",
							"OpportunityList_SelectedRows"
						],
						"expose": []
					},
					"selectionState": "$OpportunityList_SelectionState",
					"_selectionOptions": {
						"attribute": "OpportunityList_SelectionState"
					}
				}
			},
			{
				"operation": "merge",
				"name": "InvoiceList",
				"values": {
					"selectedRows": "$InvoiceList_SelectedRows",
					"_filterOptions": {
						"from": [
							"InvoiceList",
							"InvoiceList_SelectedRows"
						],
						"expose": []
					},
					"selectionState": "$InvoiceList_SelectionState",
					"_selectionOptions": {
						"attribute": "InvoiceList_SelectionState"
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrWebSiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_3guoonm",
					"labelPosition": "auto",
					"control": "$StringAttribute_3guoonm",
					"multiline": false
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_3guoonm": {
					"modelConfig": {
						"path": "PDS.UsrWebSiteCode"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});