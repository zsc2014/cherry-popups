( function( $ ) {
	"use strict";

	CherryJsCore.utilites.namespace('cherryPopupsFrontScripts');
	CherryJsCore.cherryPopupsFrontScripts = {
		init: function () {
			CherryJsCore.variable.$document.on( 'ready', this.readyRender.bind( this ) );
		},

		readyRender: function () {

		},
	}
	CherryJsCore.cherryPopupsFrontScripts.init();
} ( jQuery ) );

