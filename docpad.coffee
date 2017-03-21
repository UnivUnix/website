# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  regenerateDelay: 1000
  regenerateEvery: 3600000
  ignoreHiddenFiles: true

  port: 9778
  checkVersion: true

  templateData:
    site:
      url: "http://univunix.com"
      title: "UnivUnix"
      description: """
        El portal unificado de Unix, sus derivados y el software libre.
        Ahora con temas mas allá del software.
        """
      keywords: """
        Unix, GNU, Linux, Mac, BSD, software, libre, electrónica, impresión, 3D
        """
      styles: [
        "/styles/pure-min.css",
        "/styles/grids-responsive-min.css",
        "/styles/font-awesome.min.css",
        "/styles/unvx-ui.css",
        "https://fonts.googleapis.com/css?family=Lato:300,400,700"
      ]
      scripts: [
        "/scripts/menu-toggle.js",
        "/scripts/blazy.min.js",
        "/scripts/ajax-main.js",
        "/scripts/start-scripts.js"
      ]

    # Helper functions
    getDocumentTitle: ->
      if @document.title
        "#{@document.title} | #{@site.title}"
      else
        @site.title

    getDocumentDescription: ->
      @document.description or @site.description

    getKeywords: ->
      @site.keywords.concat(@document.keywords or []).join(', ')

    formatURL: (url) ->
      url
      .replace(/\s/g, "%20")
      .replace(/&/g, "&amp;")

    getFullURL: (relativeURL) ->
      @formatURL(@site.url + relativeURL)

  collections:
    articles: ->
      @getCollection('documents')
      .findAllLive({relativeOutDirPath: /articles[\/\\]\w+/}, [{date: -1}])
      .on "add", (model) ->
        model.setMetaDefaults({
          layout: "article"
        })

    pages: ->
      @getCollection('documents')
      .findAllLive({relativeOutDirPath: 'pages'}, [{date: -1}])
      .on "add", (model) ->
        #model.setMetaDefaults({layout:"page"})

    categories: ->
      @getCollection('documents')
      .findAllLive({relativeOutDirPath: 'categories'}, [{date: -1}])
      .on "add", (model) ->
        model.setMetaDefaults({
          layout:"articlelist"
        })

  #Environment configuration
  localeCode: 'es'

  environments:
    development:
      templateData:
        site:
          url: "http://localhost:9778"
      hostname: 'localhost'
      maxAge: false
    production:
      maxAge: false
      hostname: 'univunix.com'

  # Plugins configuration
  plugins:
    api:
      baseApiUrl: '/unvx-api'
      source: [
        file: 'api/users.js'
        ]
    authentication:
      protectedUrls: ['/protected/*']
      forceServerCreation: true

      ensureAuthenticated: (req, res, next) ->
        if req.isAuthenticated()
          return next()
        res.redirect('/login')

      strategies:
        google:
          settings:
            clientID: process.env.GOOGLE_CLIENT_ID
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
            authParameters:
              scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
              ]
          url:
            auth: '/auth/google'
            callback: '/auth/google/callback'
            success: '/'
            fail: '/login'
        github:
          settings:
            clientID: process.env.GITHUB_CLIENT_ID
            clientSecret: process.env.GITHUB_CLIENT_SECRET
          url:
            auth: '/auth/github'
            callback: '/auth/github/callback'
            success: '/'
            fail: '/login'
    moment:
      formats: [
        {
          raw: 'date',
          format: 'YYYY-MM-DD',
          formatted: 'pc'
        },
        {
          raw: 'date',
          format: 'DD/MM/YYYY',
          formatted: 'human'
        }
        {
          raw: 'date',
          format: 'ddd, DD MMM YYYY HH:mm:ss ZZ',
          formatted: 'rfc'
        }
      ]
    imagin:
      targets:
        'default': 'articleList'
        'articleList': (img, args) ->
          return img
            .resize(698, 396, "^")
            .gravity('Center')
            .crop(698, 396)
    less:
      compress: true

  #Event configuration
  events:
    # Server Extend
    # Used to add our own custom routes to the server before the docpad routes are added
    serverExtend: (opts) ->
      # Extract the server from the options
      {server} = opts
      docpad = @docpad

      # As we are now running in an event,
      # ensure we are using the latest copy of the docpad configuraiton
      # and fetch our urls from it
      latestConfig = docpad.getConfig()
      oldUrls = latestConfig.templateData.site.oldUrls or []
      newUrl = latestConfig.templateData.site.url

      # Redirect any requests accessing one of our
      # sites oldUrls to the new site url
      server.use (req,res,next) ->
        if req.headers.host in oldUrls
          res.redirect(newUrl+req.url, 301)
        else
          next()

      server.get '/' , (req,res,next) ->
        if req.user and req.user.isNew
          res.redirect('/sign-up')
        else
          next()
}

# Export the DocPad Configuration
module.exports = docpadConfig
