Yogurt.Alert = CLASS({

	preset : function() {
		'use strict';

		return UUI.ALERT;
	},

	params : function() {
		'use strict';

		return {
			style : {
				backgroundColor : '#fff',
				color : '#333',
				textAlign : 'center',
				border : '1px solid #333',
				borderRadius : 5,
				boxShadow : '0 0 5px rgba(0,0,0,0.3)',
				onDisplayResize : function(width, height) {

					if (width > 300) {
						return {
							width : 280
						};
					} else {
						return {
							width : '90%'
						};
					}
				}
			},
			contentStyle : {
				padding : 20,
				fontSize : 20
			},
			buttonStyle : {
				borderTop : '1px solid #999',
				padding : 15,
				fontSize : 20
			}
		};
	},

	init : function(inner, self, message) {
		'use strict';
		//REQUIRED: message
		
		var
		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonColor;

		self.append(message);
		
		self.getButton().on('mouseover', function(e, button) {
			button.addStyle({
				color : '#fff',
				backgroundColor : color
			});
		});
		
		self.getButton().on('mouseout', function(e, button) {
			button.addStyle({
				color : color,
				backgroundColor : 'transparent'
			});
		});
		
		UANI.FADE_IN({
			node : self.getNode()
		});
	}
});
