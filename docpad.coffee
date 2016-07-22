# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	regenerateDelay: 2000
	ignoreHiddenFiles: true
	
	port: 9778
	checkVersion: true
	
	templateData:
		site:
			url: "http://univunix.com"
			title: "UnivUnix"
			description: """
				El portal unificado de Unix, sus derivados y el software libre. Ahora con extra de electrónica e impresión 3D.
				"""
			keywords: """
				unix, gnu, linux, mac, bsd, software, libre, electrónica, impresión, 3D
				"""

		# Helper functions
		getDocumentTitle: ->
			if @document.title
				"#{@document.title} | #{@site.title}"
			else
				"#{@site.title}"
				
		getDocumentCssClass: ->
			if @document.layout
				"#{@document.cssClass}"
			else
				"landing"
	#Plugins configuration
	
	#Event configuration
	
	#Environment configuration
	localeCode: 'es'
	env: 'development'
	
	environments:
		development:
			hostname: 'localhost'
			maxAge: false
			port: 9008
		production:
			hostname: 'univunix.com'
}

# Export the DocPad Configuration
module.exports = docpadConfig
