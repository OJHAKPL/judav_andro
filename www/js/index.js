$( document ).on( "pagecreate", ".jqm-demos", function( event ) {
	var search,
		page = $( this ),
		that = this,
		searchUrl = ( $( this ).hasClass( "jqm-home" ) ) ? "_search/" : "../_search/",
		searchContents = $( ".jqm-search ul.jqm-list" ).find( "li:not(.ui-collapsible)" ),
		version = $.mobile.version || "dev",
		words = version.split( "-" ),
		ver = words[0],
		str = words[1] || "",
		text = ver;

	// Insert jqm version in header
	if ( str.indexOf( "rc" ) == -1 ) {
		str = str.charAt( 0 ).toUpperCase() + str.slice( 1 );
	} else {
		str = str.toUpperCase().replace( ".", "" );
	}

	if ( $.mobile.version && str ) {
		text += " " + str;
	}

	$( ".jqm-version" ).html( text );

	// Global navmenu panel
	//$( ".jqm-navmenu-panel ul" ).listview();

	$( document ).on( "panelopen", ".jqm-search-panel", function() {
		$( this ).find( "input" ).focus();
	})

	/*$( ".jqm-navmenu-link" ).on( "click", function() {
		page.find( ".jqm-navmenu-panel:not(.jqm-panel-page-nav)" ).panel( "open" );
	});*/

	// Turn off autocomplete / correct for demos search
	$( this ).find( ".jqm-search input" ).attr( "autocomplete", "off" ).attr( "autocorrect", "off" );

	// Global search
	$( ".jqm-search-link" ).on( "click", function() {
		page.find( ".jqm-search-panel" ).panel( "open" );
	});
});

$('.add-btn').click(function(){
	$(this).toggleClass('active');	
	$('.add-folder').slideToggle();
});
