var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "telegram",
      "title": "Telegram",
      "url": "https://web.telegram.org/a/",
      'image': 'https://cdn.pixabay.com/photo/2021/12/27/10/50/telegram-6896827_960_720.png'
    }, 
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': 'https://vscode.dev/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1280px-Visual_Studio_Code_1.35_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "https://reddit.com",
      'image': 'https://images.seeklogo.com/logo-png/40/2/reddit-logo-png_seeklogo-409489.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com",
      'image': 'https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png'
    },
    {
      "id": "twitter",
      "title": "Twitter",
      "url": "https://twitter.com",
      'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'image': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/3840px-Spotify_App_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': 'https://chess.com',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
    },
    {
      'id': 'movie-web',
      'title': 'movie-web',
      'url': 'http://movie-web.app/',
      'image': 'https://github.com/movie-web/movie-web/blob/dev/public/android-chrome-512x512.png?raw=true'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': 'https://coolmathgames.com',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
    },
    {
      'id': 'gbaemulator',
      'title': 'GBA Emulator',
      'url': 'https://cattn.github.io/gba',
      "image": "https://cattn.github.io/gba/pwa/apple-icon-180.png",
      "description": "A Game Boy Advance retro emulator with over 3000 games, and other consoles as well"
    }
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
