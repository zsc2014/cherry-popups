( function( $ ) {
	"use strict";

	CherryJsCore.utilites.namespace('cherryPopupsBackScripts');
	CherryJsCore.cherryPopupsBackScripts = {
		init: function () {
			CherryJsCore.variable.$document.on( 'ready', this.readyRender.bind( this ) );
		},

		readyRender: function () {

		},
	}
	CherryJsCore.cherryPopupsBackScripts.init();
} ( jQuery ) );

