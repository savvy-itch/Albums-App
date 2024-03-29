// eslint-disable-next-line no-unused-vars
const albums = [
  {
    id: 1,
    title: 'Interpol - Turn On the Bright Lights',
    mood: 'melancholic',
    speed: 'medium',
    heaviness: 'normal',
    novelty: 'contemporary',
    coverUrl: './images/covers/totbl.jpg',
    spotifyUrl: 'https://open.spotify.com/album/2OhUWm2KJay2YWeItU9YcH?si=gdTv9kPNQsyk5ULbHXGERw',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_nFNCpqN_JimxDFzDvSS-BXuFOpROuwXPk&feature=share'
  },
  {
    id: 2,
    title: 'Deftones - Diamond Eyes',
    mood: 'melancholic',
    speed: 'slow',
    heaviness: 'heavy',
    novelty: 'contemporary',
    coverUrl: './images/covers/diamond-eyes.jpg',
    spotifyUrl: 'https://open.spotify.com/album/1GjjBpY2iDwSQs5bykQI5e?si=wjmDs_6bTr2M2S4wMl3F_Q',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mzdSss7UIV0ZF0wudG1-um8OVrfXGMrkM&feature=share'
  },
  {
    id: 3,
    title: 'Magdalena Bay - Mercurial World',
    mood: 'happy',
    speed: 'slow',
    heaviness: 'light',
    novelty: 'contemporary',
    coverUrl: './images/covers/mercurial-world.jpg',
    spotifyUrl: 'https://open.spotify.com/album/1ERrUvG31thFCxdwWUoJrY?si=6pyHLflRR6m8i97nbSMT3g',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mfadi1aaUHZ8Vgw9g5iDSZvV3GrhJ7sBA&feature=share'
  },
  {
    id: 4,
    title: 'System of a Down - System of a Down',
    mood: 'angry',
    speed: 'fast',
    heaviness: 'heavy',
    novelty: 'old',
    coverUrl: './images/covers/soad.jpg',
    spotifyUrl: 'https://open.spotify.com/album/3sSfjX4fhZonjyZ10x0l0f?si=xtLufJWQRwiyYcaXN3Hv8g',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_msHcqLxIGsqY6jJzI2rDdf_PmgyIVBC2c&feature=share'
  },
  {
    id: 5,
    title: 'Grimes - Art Angels',
    mood: 'happy',
    speed: 'medium',
    heaviness: 'light',
    novelty: 'contemporary',
    coverUrl: './images/covers/art-angels.jpg',
    spotifyUrl: 'https://open.spotify.com/album/7J84ixPVFehy6FcLk8rhk3?si=EtrcKXeGQjaLo5kopqEEsg',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_m3Vt0OtHZf8MrKZp7b9B0r2ehLyLvuQwM&feature=share'
  },
  {
    id: 6,
    title: 'Blondie - Eat to the Beat',
    mood: 'happy',
    speed: 'medium',
    heaviness: 'light',
    novelty: 'old',
    coverUrl: './images/covers/ettb.jpg',
    spotifyUrl: 'https://open.spotify.com/album/4gbZS6jj6ufbiSG4C8jLv5?si=DezV_CKCTpiSk1-DFXCLlw',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_l-MfSfCDNlbFCGD8A8wCWnHQKOM4-x_18&feature=share'
  },
  {
    id: 7,
    title: 'Squarepusher - Feed Me Weird Things',
    mood: 'melancholic',
    speed: 'fast',
    heaviness: 'normal',
    novelty: 'old',
    coverUrl: './images/covers/fmwt.jpg',
    spotifyUrl: 'https://open.spotify.com/album/3RJcXXVLIQxLlppvvM6xLR?si=-KbEKsLYQ06-3pNowvSCng',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_lQNzcHRPAJ_5mr5iEkL7A3l6ZHIflG5As&feature=share'
  },
  {
    id: 8,
    title: 'Tubeway Army - Replicas',
    mood: 'melancholic',
    speed: 'slow',
    heaviness: 'light',
    novelty: 'old',
    coverUrl: './images/covers/replicas.jpg',
    spotifyUrl: 'https://open.spotify.com/album/14chsctrt7Rx38fQUbfqFz?si=g3ELk9SpSA6RRXNraDe3zQ',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_kry4zobAtqkKJl1nlJeYOyfGoKjlKRWUc&feature=share'
  },
  {
    id: 9,
    title: 'The Go! Team - Get Up Sequences Part Two',
    mood: 'happy',
    speed: 'medium',
    heaviness: 'light',
    novelty: 'contemporary',
    coverUrl: './images/covers/go-team.jpg',
    spotifyUrl: 'https://open.spotify.com/album/5riPtEQCkJG7XZtf2fj7l7?si=NQP4ljiMS3izobuimig-fA',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mO8KewtwDAgjTaZwtzpJQeliRicdpf1Zw&feature=share'
  },
  {
    id: 10,
    title: 'Beastie Boys - Paul\'s Boutique',
    mood: 'happy',
    speed: 'medium',
    heaviness: 'normal',
    novelty: 'old',
    coverUrl: './images/covers/beastie-boys.jpg',
    spotifyUrl: 'https://open.spotify.com/album/1kmyirVya5fRxdjsPFDM05?si=7LmQZJH_TG-P8h7EFw_8sA',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_nc8KjgcZoiX8wIogP9lm5BzBfepScP6CU&feature=share'
  },
  {
    id: 11,
    title: 'Fugazi - Repeater + 3 Songs',
    mood: 'angry',
    speed: 'medium',
    heaviness: 'normal',
    novelty: 'old',
    coverUrl: './images/covers/fugazi.jpg',
    spotifyUrl: 'https://open.spotify.com/album/6JbGZGta38AArBgflt024C?si=5UFg8aPLS-ikMCWt07YuMQ',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_nzLnF9XNOY8eLPgONX0HCR8iiKl8uWpGk&feature=share'
  },
  {
    id: 12,
    title: 'Hüsker Dü - New Day Rising',
    mood: 'angry',
    speed: 'fast',
    heaviness: 'heavy',
    novelty: 'old',
    coverUrl: './images/covers/husker-du.jpg',
    spotifyUrl: 'https://open.spotify.com/album/2eOu9QDLP2MoO04ZtII2Vm?si=Af6yVKCzRpG62LXqjOxLyw',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_nHahDKhISWuZmiin2vux49i0Wy8HOGK5U&feature=share'
  },
  {
    id: 13,
    title: 'Nine Inch Nails - Pretty Hate Machine',
    mood: 'angry',
    speed: 'medium',
    heaviness: 'heavy',
    novelty: 'old',
    coverUrl: './images/covers/nin.jpg',
    spotifyUrl: 'https://open.spotify.com/album/3umFHeEpc4yLXtrRcv9gLN?si=Azm4P8huQGujVFDoOrlBjw',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_lIhrb7UEI0pJrEaFB40pNTM94CfTmUZlk&feature=share'
  },
  {
    id: 14,
    title: 'Soul Glo - Diaspora Problems',
    mood: 'angry',
    speed: 'fast',
    heaviness: 'heavy',
    novelty: 'contemporary',
    coverUrl: './images/covers/soul-glo.jpg',
    spotifyUrl: 'https://open.spotify.com/album/2ZYhM0LXHZ38te98EizcQW?si=rCs17Z1zSneev2b6VKyEIw',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mdLC5XBYE3yLTuA_c118YApSRxgeoaB-U&feature=share'
  },
  {
    id: 15,
    title: 'Boards of Canada - Music Has the Right to Children',
    mood: 'relaxing',
    speed: 'slow',
    heaviness: 'light',
    novelty: 'old',
    coverUrl: './images/covers/mhtrtc.jpg',
    spotifyUrl: 'https://open.spotify.com/album/6LZiNXaDvhzvnXUubVOmNU?si=nDsAiL57Qbaf_S05Pw8IbA',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mKDPOLwgw4WoiZibFCLRUBg6BQynTPq7Q&feature=share'
  },
  {
    id: 16,
    title: 'Palm Skin Productions - Other Times',
    mood: 'relaxing',
    speed: 'slow',
    heaviness: 'light',
    novelty: 'contemporary',
    coverUrl: './images/covers/psp.jpg',
    spotifyUrl: 'https://open.spotify.com/album/18YUMGdFg0I4Lqa491CI7C?si=-XLQqrACTmqpDAsjRPGCUw',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_nCxmkxxCQV5hq-NkHoirTKih3YECPiCeI&feature=share'
  },
  {
    id: 17,
    title: 'Yppah - Eighty One',
    mood: 'melancholic',
    speed: 'slow',
    heaviness: 'light',
    novelty: 'contemporaryold',
    coverUrl: './images/covers/yppah.jpg',
    spotifyUrl: 'https://open.spotify.com/album/2UIU05VdHG9isZKq2ZZygA?si=dMLKjRftSbG4tau1DzWX-A',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_kIkyWkr72eYBfzqFyPJbWB5cnq2Mhsig4&feature=share'
  },
  {
    id: 18,
    title: 'Mogwai - Happy Songs for Happy People',
    mood: 'happyrelaxing',
    speed: 'slow',
    heaviness: 'light',
    novelty: 'contemporary',
    coverUrl: './images/covers/mogwai.jpg',
    spotifyUrl: 'https://open.spotify.com/album/1k2uLH7mwB72zbepvM8rR4?si=Am3OcqQ0Ty6Rmm55s5evrA',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_m3yPcQwS6B1LY73PACLrF8VkArxaRZdB0&feature=share'
  },
  {
    id: 19,
    title: 'Brian Eno - Apollo: Atmospheres and Soundtracks',
    mood: 'relaxing',
    speed: 'slow',
    heaviness: 'light',
    novelty: 'old',
    coverUrl: './images/covers/apollo.jpg',
    spotifyUrl: 'https://open.spotify.com/album/1Z2jkEtW5Sc9wWVxUgyG0E?si=yq2CvK_tTY-V_WjiRGLvZA',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_m9qpCliM5DXqgRlO3xlfzQfVH1KLYiKLw&feature=share'
  },
  {
    id: 20,
    title: 'Fred V & Grafix - Recognise',
    mood: 'happy',
    speed: 'fast',
    heaviness: 'normal',
    novelty: 'contemporary',
    coverUrl: './images/covers/recognise.jpg',
    spotifyUrl: 'https://open.spotify.com/album/6H4WrWsWidQdny1oyfuI0N?si=u8OG-EEQSCiUoSpSnywYlQ',
    youtubemusicUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_kKJVaa4NuGWU6uB8d55xdu519AhgtpAU4&feature=share'
  },
];