import { Artwork } from './types';

export const ARTWORKS: Artwork[] = [
  // --- GAMING GALLERY ---
  {
    id: 'game-1',
    title: 'The Crystal Grove',
    category: 'Gaming',
    subcategory: 'ENVIRONMENT',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1RitGqLlCczZBVPvkc6OB3DvsxWG-AuM65mlSNZsX1pCY8UQnRChCahGo8lv7Z2mmHi2VSLHEiA8oWLZO4UCjlbEYzmGcdaExMf1AGPCSFSFKnB8Hf73RsFiY-jO6QzCs1H7VmqR88JoM-mnlGRdoRSAWIJyfPrGwslZ8BdPgOs_A7wp7-d82H7sdgvAwfqFHg_lJPoUBAu3Adj-NC1lHNnVE17CRjNFZYJWr7O3zWFIALiajGIa8KZK_81H6aK9u1heHvp9pkdw',
    description: 'A lush, ethereal forest clearing from a high-fantasy RPG game. Ancient glowing trees with cyan leaves tower over a misty path. Small particles of magical light float in the air. The lighting is soft and mystical, with deep shadows and vibrant emerald accents. Digital art with a cinematic, atmospheric perspective.',
    author: '@pixel_mage',
    year: '2024',
    tags: ['RPG', 'Forest', 'Bioluminescent', 'Fantasy']
  },
  {
    id: 'game-2',
    title: 'Neo Sentinel',
    category: 'Gaming',
    subcategory: 'CHARACTER',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjV0n9fq1TOvXCgHu6hm4mIyA3GHiKI2lYMX8xeIRFMkSBA4BE3IPhhjQcWwnl_eY_vg8ckVh15awVbH4-JzUVri50Z8d55SVdCijlJc9tJ4gVohDcDcoCATq8vaGM0DvStZ9meyFf2eFdkcMEIvjOH9GWsVgeYBkGVwEA94B2CZVEk5Rc3usB6ZGooO1eIIjSZ7gHVEIGnidfGV5Ao58iCBu_xLq8PL4ziaXqIr0kYFvBIsrHSwfscUSZrof7EI4ViH9_cBKxpFA',
    description: 'A close-up portrait of a futuristic cyborg warrior character in high-fidelity 3D detail. Their armor features glowing cyan circuitry and matte carbon fiber textures. One eye is replaced with a glowing red optical sensor. Background is a blurred rainy cityscape. High-end gaming character design with realistic textures and dramatic studio lighting.',
    author: '@cyborg_atelier',
    year: '2025',
    tags: ['Sci-Fi', 'Cyborg', '3D Model', 'Unreal']
  },
  {
    id: 'game-3',
    title: 'Bit City Nights',
    category: 'Gaming',
    subcategory: 'RETRO PIXEL',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACNBt3Og9LeD67SJVQYKijKsXBdG4XHKYJ7IqBHPJcdsJlcTKp6E-vlWAsvY4BXMjjzWMZvnw3LEnZ8vG6WxVdDmawS1PYmM5u1bqUHUIbsJW3jm1RWgx8wlVzVmRfEG37Y0RGAlJ7ScuiTxF5kkecTPXm2w9_a1a_DIzIYKSl4WC-dhb_frwr_tPA1fkGNakJjSfEhJom7Sqod6Hp3Bgvl7r0u_NDZWmwZqsgGwVZVHTTYb24KFfWJz-j5SMZ0UNNCEhOz3RmWQs',
    description: 'A vibrant 16-bit pixel art landscape of a retro cyberpunk sunset. The city skyline is a dark silhouette against a sky of layered purples, oranges, and pinks. Animated-style palm trees are in the foreground. The aesthetic is nostalgic vaporwave with a clean, grid-like pixel structure. High contrast and saturated neon colors.',
    author: '@chunky_pixels',
    year: '2023',
    tags: ['Retro', 'Vaporwave', '16-bit', 'Cyberpunk']
  },
  {
    id: 'game-4',
    title: 'Final Showdown',
    category: 'Gaming',
    subcategory: 'ESPORTS',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBddN7ztjcB5wU2wju_3I1l_P9YPO16xLIAbp9ukIY1UXk7_TXEMCxGlP1MmP2MSHBuzEKUwDd3Oi5RiE7R66qUuZ9riPrTBGIE6BB5XZFrKS_UF3U5y1yWG-PBFofFKhR4YtK89XI4ZjtgDy0XQ_Uxq8y5Mm_L0p3GswkOww8ndrcpIHWPd3LzX0YJDoKH-4Tu9vZ8yMAey2R-EOf80HjoGEhJoCyl6H2nscFT8b2VNPqiPgaMPkXz-H0Twx25XgYsG11r9e8pnw0',
    description: 'A dynamic shot of a massive esports arena packed with fans, focusing on the central stage where players sit in high-tech booths. Giant screens above display game action in vivid detail. The arena is bathed in deep blue and red stadium lighting, with hazy atmospheric smoke effects. The energy is electric and high-stakes.',
    author: '@arena_cam',
    year: '2024',
    tags: ['Esports', 'Arena', 'Live Event', 'Tournament']
  },
  {
    id: 'game-5',
    title: 'Nova Protocol',
    category: 'Gaming',
    subcategory: 'STRATEGY',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVypVa7aXpd1YoVWeVxb7PdnrEX9W-wB4JiLUeEJFVwZB2zSfU4OYWZgxOd3TpXalxCYpD56fiHHjWLt5AZAj8DYSuJdhgNoPEGndN-rbv6qPKHDGVWx4ESAnuXJSBjqnjCywoWc9m9yq1AbD5SsuTYmcyMRaE2-UBjWFazPLW5lYSofRpAoiCD7ZKhrtsRD8B4UG-6eIi7vR9Yg6DpF5RiKcSdvR63WayQ3EYxLc04CE5BACBdzGnK4IJRp5BwMVv5TBDUGXShdM',
    description: 'An isometric view of a futuristic space station hallway. White sleek panels contrast with orange emergency lighting. Robots are repairing a damaged wall section. The visual style is crisp and clean science fiction gaming art, with high attention to technical detail and realistic metallic reflections.',
    author: '@matrix_grid',
    year: '2024',
    tags: ['Sci-Fi', 'Astral', 'Robots', 'Isometric']
  },
  {
    id: 'game-6',
    title: 'Deep Echoes',
    category: 'Gaming',
    subcategory: 'INDIE',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQRgHByzYeddYZppu6Vi3TZFhaenGrKOMzpu6wF3MeU9hlLFKqSBk82owDQaQ8dtr2OYDch4_ZhYWdPEe3BNBVpahzmOcEj6dRh7TN1Ljncpwevb2fIUxu6k40lZthdH_YR6zR7AQXHfkJfrj8J5Z77lwyQ6aOa3z8lrdiUf9fHhhe4zA7MsghRP0a4XPwhDYrpFGZ3PHkhBSv5RI1Iis2qICVtRQ5_HgVBfRG3ys_qdXE3ogVuYisBLARIJkO1GuoFHWW1N9wla0',
    description: 'A dark and moody subterranean cave filled with bioluminescent fungi that pulse with a soft purple light. A lonely adventurer in simple travel gear stands at the edge of a bottomless pit. The mood is mysterious and atmospheric, common in indie exploration games. The lighting is low-key and dramatic.',
    author: '@echo_void',
    year: '2024',
    tags: ['Indie', 'Adventure', 'Caves', 'Subterranean']
  },
  {
    id: 'game-7',
    title: 'Apex Velocity',
    category: 'Gaming',
    subcategory: 'RACING',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy5IPCqLddhkv7bDKeKce9JU6lgcN5qR8HXAZkhJdPiqc1Zk8gO6AfKs-wMyNl_bto3tcpgGZR_x3k1JJ9t7L26flpmipYwKsFhTkgC1NWcsn9VoJN_rPcU-q2mja0DMVfN2LCkp_AULeZftvtQJBOZWyCLPfxINThHUgtj8ftZ-pH86NZJDFZO166Tsb345-094East-Sugl-Ab4H9wYnPZSvCySnMpe61Sob59JBtqbsT4OJu4GGHV-gmu_qo3lzfKxDDw4QJfM',
    description: 'A hyper-realistic racing car drifting around a sharp turn on a high-speed circuit. Sparks fly from the asphalt, and the background is a blur of speed and neon barriers. The lighting is late-night urban race aesthetic, with vibrant blue and yellow light streaks. Sharp focus on the car\'s reflective surface.',
    author: '@speed_demon',
    year: '2024',
    tags: ['Racing', 'Drift', 'Supercar', 'Apex']
  },
  {
    id: 'game-8',
    title: 'Dune Wanderer',
    category: 'Gaming',
    subcategory: 'MOBILE',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkayRdhQWk9VOZPFcvNbkbZwCkqDyeho9ovemeDaBS6XmHYSb-zSVuGxvu2Xq_CXZvqFJAILanHdu_MQSjjtOKWVaI5H0Y5mtGzgN5JpelKm45-VKatWxueGWIE9aPNyOIgaWeLl8alJyUcJs4QFiICRqK-JTtNDebaWe69muu_xpILlCVZTGTswzxvzyT-KbeFSqHZfhIwMKOtPeQUxxMWW90MiivrBf9neuvCIKe-0M_Ild9LNzFJAXLFP8mxA4L__YHHd8tmGU',
    description: 'A stylized, low-poly desert landscape from a mobile adventure game. The sun is a massive stylized circle setting behind orange dunes. A small desert fox stands in the foreground. The color palette is warm and inviting with golden yellows and burnt oranges. The aesthetic is clean, modern, and minimalist.',
    author: '@lowpoly_studios',
    year: '2024',
    tags: ['Mobile', 'Desert', 'Minimalist', 'Safari']
  },
  {
    id: 'game-9',
    title: 'Iron Breach',
    category: 'Gaming',
    subcategory: 'FPS',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5AdY1sgm5t5UbkHWqCEa5ZGYQgwfFfJQV3QIsND7IeZ5BDKReZ-RMaiXDT4OX4nrmR_GoHhsKaEW1MFkb9V9H7Z6nhMmulbtaOv37zaXQFyzs5tpz4HPoMxmDhDW0MG0Hxr1CYYobbiuq3OcTlJnejsBJl2hl6Ld_9PVhSg8VuVp6nNIkHqxGPkjMaOC4Sd1f1ZxzR8ah48OG-7R8WIV-4lziVKxQ8pCVMdDLWfVKHH2fqDu0nQiwwUYrIHcWxzv1cWOjLMbreao',
    description: 'An intense first-person perspective in a futuristic FPS game. The player\'s hands hold a glowing energy rifle. The environment is a dark industrial corridor with red alarm lights flashing. Smoke and sparks fill the air. The lighting is high-contrast and gritty, capturing the tension of tactical combat.',
    author: '@tactical_operator',
    year: '2025',
    tags: ['FPS', 'Guns', 'Sci-Fi', 'Action']
  },
  {
    id: 'game-10',
    title: 'Kingdom Siege',
    category: 'Gaming',
    subcategory: 'STRATEGY',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHuHv0B_ekXd3sHS-Ei-LLWQhIQsrzs0vDz-glBr89_t3Tg-CIQekkBCDO3MWNneisB9jVTa40f1GGud09pQ-A2H415HFY3Z30TFmfUH-XDjupnUrQmqV5PkjfUkVhSg8TI6IA1ra6CCeGhpXoCof1zur8C_s29FRhDVoxgvVCaHmW2hyPhvgVoE4vUWoVySmOFff8k-ALYuu0lMDO-pQwdEyQqFvrED6KjxQsrShXMlhwK_oFEwQbeg3vtvGf3tFDjYcfJ7227wo',
    description: 'A sprawling top-down view of a massive fantasy battle in a real-time strategy game. Armies of knights and dragons clash on a vast green plain near a massive stone fortress. Magic spells create explosions of blue and gold light across the battlefield. The scale is epic, with hundreds of detailed units visible.',
    author: '@strategic_lord',
    year: '2023',
    tags: ['Strategy', 'Medieval', 'Clash', 'Dragons']
  },
  {
    id: 'game-11',
    title: 'Aura Garden',
    category: 'Gaming',
    subcategory: 'PUZZLE',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATzpgZ1eqcsN_8lBlzRVq4UycMK2o-Ddt_2KQCss_CD-fXXEABtAnKYIxLP4UZWO1Bp8C4c8KGV9TtMk8Qr4dPNq7JlJ6BROvmfOj1HOO9MSOESh9XhsydZunR5_C-ycQL0Bn40RImgvEZ7nWEwPcy5tHMze8ZeyQuE20IvsrsJy6GHShzDW3e5ok7FIi4Xky7v3FfE9L85_4CAbpYAmj8eP5UXc66IJfR-01-7dMnma7f_JSUea6LdrK4UPTzBQmimFQuc5U_oKc',
    description: 'A minimalist, zen-like garden from a puzzle game. Floating platforms made of smooth white stone are arranged over a perfectly still lake. Cherry blossom petals drift slowly through the air. The lighting is bright and airy, with a soft-focus aesthetic and a pastel color palette of pinks and light blues.',
    author: '@zen_puzzle',
    year: '2024',
    tags: ['Puzzle', 'Zen', 'Calm', 'Blossoms']
  },
  {
    id: 'game-12',
    title: 'Noir City',
    category: 'Gaming',
    subcategory: 'ADVENTURE',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrf4FryQi_H3yZ5hbYL863RTV9sZtRXmPXzcXlPjSZzQQLLEt4ICeDposnAeQbRXZPzXoT3dotNe9djc-EpZ1MGdSkNv3AQpxH2sIFXW5NHQwGRHYV1_QWlvkoWwQ3N9fEY_GzKFBeQShS9aOf0tolxSghjSHAUrFWWdXmmX0yDtlgg11Y_nEju1cStAWYULTaiV_f39KHHuYfv9cn2i0pbubbcT97sRHoNHOK34-Ly7HLayYD0Mr4IMvUA_qsO-uMfXse6XUr8Uk',
    description: 'A high-contrast black and white noir scene from a detective-themed adventure game. A character in a trench coat stands under a single flickering streetlight in a rain-slicked alleyway. Dramatic shadows and sharp highlights create a classic film noir atmosphere. The visual style is graphic and cinematic.',
    author: '@case_closed',
    year: '2024',
    tags: ['Detective', 'Noir', 'Mystery', 'Atmospheric']
  },

  // --- ENTERTAINMENT GALLERY ---
  {
    id: 'ent-1',
    title: 'Neon Requiem: Aftermath',
    category: 'Entertainment',
    subcategory: 'Movies',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApD18pKkC1K7i7Wj35GvqRU7DGPTAlXJ0blebgFQw1505Kc9B9KvZRusf_FygeYTOyTF_94CHFnT5IcSKEth0eLKHacyXwpuEL6XHzIGn4cQTQ9NJHM0YXz2ePowexU_mwSk963lRdss26ELDT_vATxYJdPZLydMdNFve6VdMQtxDL1PORbqmc9d9EVf8cyiZd28w97DqzlwC-gfBegP_2YoJlptm1VeC879ZcvqFUDjsLKE63uEFuULzZrlgwG7w87YCMr3mBKdQ',
    description: 'A wide cinematic shot of a futuristic cyberpunk city at night during a heavy rainstorm. Neon purple and cyan signs illuminate the slick streets while a mysterious figure in a dark trench coat stands overlooking the skyline. The atmosphere is moody, tech-forward, and sophisticated.',
    author: '@cyber_director',
    year: '2024',
    tags: ['Sci-Fi', 'Cyberpunk', 'Cinematic', 'Noir']
  },
  {
    id: 'ent-2',
    title: 'The Echoes World Tour',
    category: 'Entertainment',
    subcategory: 'Music',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHXj3w7FoJyxO3NBRAtSj_fDG-GMFub-S00V2CRZskAXKb97BGLJzyi-YDPwIPlOCzQh03FxE9-NNg6ZN6L_lFwSfto4SdEhut4IWf0jYxD-do1goBsq7DdBe7SbWPpU-RP2LPWOwzTYHrB7SjTDCP6DrHP0LwiK0TsXGoUoqDQf0AJFmjIVYzfHoWf6sB0teh5iu7FKoc1dWNZYJ5OKgDjapXlObrueFhe40XdM6rA1T_4NV3rxWLyrNxYbnedJjx3KXvcSsheSM',
    description: 'An electrifying live concert scene showing a silhouetted rock band on stage under intense beams of cyan and purple spotlights. A massive crowd of fans is seen with their hands in the air, captured in a burst of lens flare and atmospheric stage fog. High-energy, immersive, and cinematic lighting.',
    author: '@echoes_band',
    year: '2024',
    tags: ['Live', 'Concert', 'Tour', 'Purple Glow']
  },
  {
    id: 'ent-3',
    title: 'Eternal Horizon',
    category: 'Entertainment',
    subcategory: 'Anime',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfpMoLtEX4xgKxoJypt_U0qHpQU6rq6MlcPvuUEvly1HUqdVOZhTibDFLFx4IcMVAk8ICFfkZjGQ-jWxOOkyZEgNCtsrrjKx3LfA2evQaH9pQAJ2GKnmVsJJLthSwTq1Qdszmt2ThMha_IPxEbTbyg51bKT32cUn7Tax6yhTL4H1e7nKcnHKbgfFqQ9DsGxjkYycMJbTSqbZHmuo9BwugG2V_4crPJ13MA0PL9OJF2KO_ksesYcEeyq_74yDe8fC7bLDvy92f10jw',
    description: 'A stunning high-fidelity anime art style illustration of a serene garden under a starry violet sky. Glowing magical flowers illuminate the scene while a character with intricate silver hair gazes at a floating moon. The colors are deep purples and electric blues, with sharp digital outlines and ethereal lighting effects.',
    author: '@anime_sketchbook',
    year: '2024',
    tags: ['Anime', 'Nebula', 'Zen', 'Starry Sky']
  },
  {
    id: 'ent-4',
    title: 'Midnight in Seoul',
    category: 'Entertainment',
    subcategory: 'K-Drama',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8v1OfEGEv-UlmgJabw8jiDgWUMsI00SyAHK3FYzxVstYxxGoP4McDMZEIGctLQ_HAC_XUVlpTkWGZkPGLu7uyuMe4dusxEJZHUSyiNeOIP5V11KHuROMbPOZ8I5kKbbe4M6BpACYMwYQ61gYBvd9jMYqkxs67Sg8yJsMQhLTShruT36k2c0nWPL7LpPlwcEw9vpzV-uSI0bDJKgfiRG0Cf_n4ASMKQ0-RvVRKsNzIjfLoBd-syHeBQQxXjoZ6DGt7beHz9Oe5kec',
    description: 'A dramatic scene from a K-Drama featuring two actors in elegant modern attire standing on a rain-drenched bridge at twilight. The city lights of Seoul are blurred in the background as beautiful warm bokeh. High contrast between the dark charcoal night and the soft, romantic glow of the streetlamps.',
    author: '@kdrama_kisses',
    year: '2024',
    tags: ['Drama', 'Romantic', 'Seoul', 'Rain']
  },
  {
    id: 'ent-5',
    title: 'Gala Night Red Carpet',
    category: 'Entertainment',
    subcategory: 'Celebrities',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvcjvhhDqMocblE5l_0HMGfXHN3txpR-xt5S1Qv1OSLp__s2bNCeCQEBFFLFl1yvsyRPLZR1SYWqqSijhBWYEpC-pkYroYzFbkJ_onQq3F24G8Szh67-KtA7DuSiM9cYMQ1uy7Svny_6UxyCA9uIuT_VMzcPS0QAUPXevYkw1ER1Ackr9t5Arcc1AK4Eu9Ojxj1tZ2EXL7_hR457lY-l-ll9BqjT6SvOfjUXYCkquDio8R132sgF3D2FIVTX-504jTQWQaO4NU8VE',
    description: 'Behind-the-scenes photography of a prestigious award ceremony, showing a famous celebrity walking the black carpet under flashing camera bulbs. The person is dressed in a shimmering silver gown that reflects the surrounding purple and blue accent lights.',
    author: '@gold_lens',
    year: '2024',
    tags: ['Gala', 'Gown', 'Red Carpet', 'Flash']
  },
  {
    id: 'ent-6',
    title: 'The Last Encore',
    category: 'Entertainment',
    subcategory: 'Movies',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmdBC7gSO1zj9iaRLfKwhBBK6cb331Ln7UCxyY3V-yX929eprzq3RQUgA5Xm-6c3fbNYhI8zu_V6bZ1z6Uz9zDefUsTyrejofrVSI8GAbb6hYEuxz1wgAj6r8m-qJX3gr2SosKeAddca6HhwKGU_z1DsyTm8RJOsqzeMUxae6FaURGdCUOonuQDY5NPZReVArkAhHbAzQ1b6WBQ2DqU9hsgWs0ZYCI7h7YHGABRQUMvMLUTO2wEFTfGCiQUDSIhSqMm3aBfxeF9nw',
    description: 'A minimalist cinematic poster style image for a psychological thriller. A single spotlight hits a vintage microphone in a dark, empty jazz club. Smoke swirls in the light beam, creating deep shadows and an atmosphere of suspense and sophisticated noir.',
    author: '@thrill_factory',
    year: '2023',
    tags: ['Thriller', 'Jazz', 'Noir', 'Microphone']
  },
  {
    id: 'ent-7',
    title: 'Frost & Fire',
    category: 'Entertainment',
    subcategory: 'TV Shows',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5nDT_NvQ8cCuwnF6-DlH4Gh6EMN0XhVNSCW3dCEJBdrVJhduut-sH7mBWgL2gp3EmQed2B__5F1HX8IKvccIoHXiVcynjn75UtMlUWav6KExd1CkiUBDlL9nORgM_QvQjCI8-h4gG4xx1wzWnteRn7v9nS_7SQsjtGjuFq3VQozjLa09G9uxThSASsJwOQpbauOIUrr3G7ReWl2WAYiclYb5d6AHAe-JmO_c7LkizLwvGKcMUCb63cuw3Brj0Ps5gz5ZA9iHYWAo',
    description: 'An epic 3D rendered scene from a fantasy TV show. A majestic dragon flying over a frozen mountain range during a purple dawn. The ice peaks reflect the magenta and cyan sky. Atmospheric fog fills the valleys. Hyper-detailed textures and cinematic scale.',
    author: '@dragon_fever',
    year: '2024',
    tags: ['Fantasy', 'Dragon', 'IcePeak', 'VFX']
  },
  {
    id: 'ent-8',
    title: 'Lumina Festival',
    category: 'Entertainment',
    subcategory: 'Music',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxjcZCbIbf-DxnIvKDTZpPlwNknVwA_C-Hgiv8ZE1zEkI7zb29eA-q1KgFayF99d5ojplSC9xT1Gagic_Xas-XucjwJGCjDa6xfIpsppo9hgwP1YWJ7PHsTOS8ND8XsKoMcvtIVmSUMRXw3p9BVa-hmg2dnvt6Bh9VK1423l5IgHHiYBUJzSShv7IqEeZzaRlDD82bsQXAcOk12jFtl2lgDBuAfkPGT-_x93_TwwLk1FMFjzlNBSfe8TATv3sLl2Ky-Zn3Jppv4yE',
    description: 'Vibrant pop music concert photography. A female lead singer with bright pink hair performing under massive LED screens showing abstract geometric patterns. Confetti is frozen in mid-air by a high-speed camera.',
    author: '@lumina_gigs',
    year: '2024',
    tags: ['Pop', 'Concert', 'Live Music', 'Confetti']
  },
  {
    id: 'ent-9',
    title: 'Iconic Shadows',
    category: 'Entertainment',
    subcategory: 'Celebrities',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUO6VV6GE8-Dnv7RevlrezyThblhu3z1ceoeb8ue_qqfQnzAaDCNtqAsjjgr6AplR5ZBxAkQvA8CRimGkIY_mTxdnkTSWDq1z1_FnRCBDq1a0SQTkncO_AarIQF_Vd5SCTat1HLo-VLsfAD5mu3vAwB2CarOboQ_J_RF-KKA2JVVoX9nk5Y9WxWmrfyK7ykUFQubeNt_VAMVTRXgOvNm9CSkWXoemBc1yCuYviP80GbLuy0TXH3w0TnKQeBpwi3Uh4UkhzabGJAqo',
    description: 'A stylized portrait of a legendary rock star from the 70s, reimagined in a modern digital neon style. Deep shadows, vibrant cyan contour lighting, and grainy vintage texture. The background is a minimalist dark space with subtle light leaks.',
    author: '@retro_snaps',
    year: '1978',
    tags: ['Retro', 'Rockstar', 'NeonPortrait', 'Gritty']
  },
  {
    id: 'ent-10',
    title: 'Cyber District',
    category: 'Entertainment',
    subcategory: 'Anime',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8UB6FmTmoX-a9Y3MWvMXZBqtGgPzXY9bezREHF-IH-OnCYstxHXtNmpIv6WqvwTmGAb8GFSD8YIoCpTbPmpaZA3Ld76Ue-AB8pU0DyV8F1BZZsLCmETLJFU-8jRQ2N5WtP3yqHQ22hPzR208SGnWRgHJq00cCcFwvLY9X3ky9MAcXGjXVKSNvLS2NX6Al-sKXIYrAOoiUU20E9ItlVS7olWU_n6-__XBngFjuMfMkxByYAzijvAAPB68gNcZCOmYo50Yy84KqILo',
    description: 'An anime-style depiction of a bustling futuristic Tokyo market. Holographic advertisements float in the air. Raindrops create ripples in puddles reflecting the neon chaos. High-end digital painting with incredible depth and vibrant, saturated colors.',
    author: '@tokyo_manga',
    year: '2024',
    tags: ['Anime', 'Tokyo', 'Futuristic', 'Rainscape']
  },
  {
    id: 'ent-11',
    title: 'Vanguard: Zero',
    category: 'Entertainment',
    subcategory: 'Movies',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGTiiAw4foH9lN4xeN-MxvfYxH1QMctrIJ1-txUO_fM0MLPYXGsyBhf2RVh0NDKK9RzmVW1nNAiuw97apnqTdw7sJn7jQNfeUWh8Mntx-06R-D2AxpnX4JjacCiTfyOna6g44hBGOIapOr6uHQ9VsoahFy3DxeNlNOOiVHO1oIKJPBVY2OnoGdI52ubUjIh1law6RrZXQjZXjtvGS2Vp-2zM9NL2OCURWnaya5yAM93TNcqNvqVbGK6wuZdIqlM3g9SF0xdrtHk88',
    description: 'A dramatic close-up of a high-tech pilot headset from a sci-fi blockbuster movie. Reflective glass on the visor shows the cockpit\'s glowing dashboard controls. The lighting is low-key with intense orange and blue sparks.',
    author: '@vanguard_film',
    year: '2024',
    tags: ['Pilot', 'Visor', 'Reflective', 'Sparks']
  },
  {
    id: 'ent-12',
    title: 'Symphony of Light',
    category: 'Entertainment',
    subcategory: 'Music',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeBkEmEE5STIBTByU1UhXPhBur3QJVokUHwEaosk_o0HUHayKqSQgEcLMdL8b5vG3MWO-0RYKp7WpQNAxVMabgVP8Os7XKGQsMJdD00XKJOig7T837KuBzQoQd5yRHzdPiKMgfdMaFUzqbr6lhuJEcZKZ5NbTPLVk4Rkc9ScZYpUss2qJAn3TMyyiUljll1SbM-zI9Hhmvs0kPl6S_JICfi5vs_O03QOF7TAl6DE36a3AZBkv1Jx2uj5TKph5-j-vFg0QBvRyk-Ps',
    description: 'A wide shot of a classical orchestra performing in a massive modern architectural concert hall. The lighting is warm and golden against the dark charcoal walls. The focus is on the conductor\'s hands mid-motion. Sophisticated, elegant, and timeless aesthetic.',
    author: '@classic_orchestra',
    year: '2023',
    tags: ['Orchestra', 'Concert Hall', 'Acoustic', 'Symphony']
  },

  // --- NATURE & TRAVEL GALLERY ---
  {
    id: 'nat-1',
    title: 'The Alpine Pass',
    category: 'Nature',
    subcategory: 'Mountains',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYfXqteAT39psXLOGHoTxpkwLus3PhVQwaRJ3KzvxsCUiJSWA9pi6_jmQdWoUGTvRpYdiXpH3xAm8LW9y5kFA8B9bZoThScZVdcRGJukxWDMAZi-1UOBvLOSjym9bNPgIINAn2d7nHmIoL87EztLkSn3ljd62a93kCl4UGWHJa5UGF1OT7p9btxu1_6AlPxgW5N1xwDnxu13h7KuvOtLPZjBBnfE6KkPtamzWxTkfM_1lLCY64ABR_trKqwLH845ALa98LT_Qby-w',
    description: 'A majestic aerial view of a winding road cutting through a dense, foggy pine forest in the Swiss Alps. The trees are partially covered in light frost, and the morning sun peeks through the mist, creating dramatic light rays. The composition is vertical and moody, with deep greens and cool grays dominating the frame.',
    author: '@alps_wanderer',
    year: '2024',
    tags: ['Alps', 'Snow', 'Forest', 'Switzerland']
  },
  {
    id: 'nat-2',
    title: 'Azure Escape',
    category: 'Nature',
    subcategory: 'Oceans',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8FOpColGRXjkMACe1wcriIBDOBsetlvuwD4jteZxPL-ewN7yk8kuJCo2RcU9jJSgKuktkfthWpSvv7n1oHq4WfESw5mww7KfCA1MzzAn4ycQ5rP5HcrdC4ECAJanYWmElxfO_ntClNe32C2vVMX2noNKZKW_HSTlOo5_zoXVwdg2LUcKFFd2XEdy-8qs3KZY39VP9BgpN_g0FyfRTLec7Rx7axLdpG_NtACJLwuYEoRdVy9gW-idl51_Kk1PvtuW07ZCrAotjT8Y',
    description: 'A pristine tropical beach in the Maldives with crystal clear turquoise water gently lapping onto white powdery sand. A single palm tree leans over the water, and vibrant coral reefs are visible beneath the surface. The lighting is high-key and tropical, showcasing a spectrum of blues and whites.',
    author: '@maldives_breeze',
    year: '2024',
    tags: ['Ocean', 'Maldives', 'Beach', 'Tropical']
  },
  {
    id: 'nat-3',
    title: 'Neon Pulse',
    category: 'Nature',
    subcategory: 'Cityscapes',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsf8rBHOTd_PD04_2-cfyio7rScwCNdqwRBW01W8K6sQRYWoLpuLHeRsTs2HTiFYYb45s-tkkkz1K6GkrgaNLw3-tyZK2oZOQHtKyJH0fUZnfkMdN69B7MkI3iaa3lt6QdUWbv9Q7CoE7FhVaMvHBmaaY3VavuQHO0PJ3HH8-wX3E40XHkIEG-YPxGk8I-rqLXH-x6IomHwuabd84KjTwmB_bvO75Zy6taRnBIWF2_8bJsdXx9dJM16dumu639yxnrTF5U8rXt7Qc',
    description: 'The Tokyo skyline at dusk, with the Tokyo Tower glowing orange against a deep purple and blue twilight sky. Countless skyscrapers are illuminated with twinkling white and yellow lights, creating a complex and beautiful urban tapestry. Long exposure captures light trails from traffic below.',
    author: '@tokyo_crawler',
    year: '2024',
    tags: ['Tokyo', 'Skyline', 'Dusk', 'Urban']
  },
  {
    id: 'nat-4',
    title: 'The Ghost of the Mountains',
    category: 'Nature',
    subcategory: 'Wildlife',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGy6Ba57HVPyfUV8-El-gZ6HXQoNOtcP0F6zlRlB4S2gEcSs5kxMVebR3xobu18O3ZYdelFO0UPwsiDPAfL8aUND6BZJNomZfFRoj_ybJxzdSRdi9OeVMyu-0R9hKimBfRrXwWqc1834LJVMKsD43HSYlNSFH3JVUTNTsdccdRN1waItDX9vHwaxaRdZ_1qFRImcnpS01-iwMrhNVYDi8VeJDIkuICtdRWDX9xLECBuL9JKRKYVB-mj0GOS6zn__tvqFbhyPfHPqY',
    description: 'A dramatic close-up of a snow leopard camouflaged against the grey rocks of the Himalayas. The leopard\'s intense blue-grey eyes are in sharp focus, reflecting the harsh mountain light. The texture of its thick, spotted fur is highly detailed. Atmospheric, cold, and powerful.',
    author: '@wildlife_watcher',
    year: '2023',
    tags: ['Wildlife', 'Leopard', 'Snow', 'Himalayas']
  },
  {
    id: 'nat-5',
    title: 'Golden Solitude',
    category: 'Nature',
    subcategory: 'Deserts',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQv1LaUEBxVpM_5eZweY7jPq6tUrpjEktN_GmJJmk1BUrkq0r9luDsSJT45zP55CD0DBnKulXE9YiAr-EmsMZGfx42SO_pVG4naDNc81FYzd-YfasSbH4byhemq1fOxBsgBuCTCTa1pW4prtWgiX-0TeA84CA6IF194v2HhJ1I1HjevcU0U5anYnGDMPXqJBEpZr13vpkeLO4t0NRsOekxET8-AtEZKOrlvclw-4YIu-idyO_pl-w1noWXICbPhb0-1PKkXEYCTq8',
    description: 'An expansive view of the Sahara Desert at sunset, with rolling orange sand dunes creating long, rhythmic shadows. The sky is a gradient of fire orange and deep red. A small caravan of camels is visible in the far distance, giving a sense of immense scale and solitude.',
    author: '@sahara_dweller',
    year: '2023',
    tags: ['Desert', 'Sahara', 'Caravan', 'Sunset']
  },
  {
    id: 'nat-6',
    title: 'Cosmic Convergence',
    category: 'Nature',
    subcategory: 'Space',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA7bx5gafVQQYUvZZ1saV0Fc6MQY42m8JmvppRxStJ2O5h71z3Ama8jA5CFeT7lPhx2I6eqS1l0QBZ6_X2P80jwU-F-6dska4jeh-pPLVKax4XyStv5U0OjPMXVk-RGQQIliqen04Q0Qszrq804WgrojV03SBrECZCbNalsgybqzcW935ws4zoMJ-uMsXcL5_LJJds5a2p4rxrvpqeNZJFh66oXWiNwyw6thvgJxIzEoIZdVOvldsFCoNvrsYQr2auGVjSQrdKsZI',
    description: 'The Milky Way galaxy stretched across a perfectly dark sky above the volcanic peaks of Iceland. Glowing red lava flows in the distance contrast with the ethereal cool blues of the starlight. The composition is surreal and cosmic, highlighting the intersection of earth and space.',
    author: '@astrophoto_pro',
    year: '2024',
    tags: ['Iceland', 'Volcano', 'MilkyWay', 'Stars']
  },
  {
    id: 'nat-7',
    title: 'Sanctuary of the Wild',
    category: 'Nature',
    subcategory: 'Forests',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACRTH1MFPGxPqINtx271I6ridxwZpzSyuM2e5_GrtzUIaY4_9arZ44z2Q_zI5MsOgW-tevzT05BiWGWcDdxKAC3qfv6xDEadXix4EgD7n5iCBorrix5b1XExzs2nmV6Gf7fCqMDbPboT8phs0soEWwz2yMaTBA68XbnScr01VhXvyxj3mbvLkfGrZ2SqfADWMb3PQdZASyICz7uFMoXNORc10Zi4s3sv_HomWXWitX1pvKzHqDNu65klwlkKIPQPKVmZ8-g6hHGGI',
    description: 'A hidden waterfall deep within a lush tropical jungle in Bali. Sunlight filters through the dense canopy of oversized green ferns and vines, creating a magical atmosphere. The water falls into a turquoise pool surrounded by moss-covered stones. Peaceful, vibrant, and exotic.',
    author: '@bali_trekker',
    year: '2024',
    tags: ['Jungle', 'Waterfall', 'Forest', 'Bali']
  },

  // --- ART & CREATIVITY GALLERY ---
  {
    id: 'art-1',
    title: 'Neural Horizons',
    category: 'Art',
    subcategory: 'AI Art',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcQRCVbr2D1vp7G7y5e0uXZYNqw2FjEK8jcGEGEQoawTL4mItfMFk0eiolgYUd-CNLhzf6VAWRc2k8pssA4xYTtaYlzctJrpS9MTs7iqhcUPjO_zOUJ4Wc2yquOIDZqunvmdoxXRjeIKNE_4BCRJ113f-vc0fvBfFRaOzyt_qiANTDuhbFb2IW3HMDl7tq1uIuRloQ6oAM70wEDyVZnjPRWM_Jl-evf6tJLZ9y9juX1Hj2mimJi4utbcw-P6EgDpzz9-3LtY1NszQ',
    description: 'A mesmerizing AI-generated abstract art piece featuring flowing ribbons of neon cyan and violet light swirling in a dark void. The composition uses high contrast and intricate mathematical patterns to evoke a sense of digital consciousness. The lighting is ethereal, creating a glowing, cinematic atmosphere consistent with a high-end digital gallery.',
    author: '@synthetica',
    year: '2024',
    tags: ['AI Art', 'Abstract', 'Algorithm', 'Futurism']
  },
  {
    id: 'art-2',
    title: 'Solar Oasis',
    category: 'Art',
    subcategory: 'Illustrations',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQjWK0WjTfIWdLQPBnXdLEr5ctQ4wbhcodXgMNd5S2oYdxZSpqFsDGagIHrvX2QEs6YM6acG1A1mgr2iJQY8M9Fq4_FP5KeuxKVDNYZu0fovjtcBWFOHRNfwiDY1J7Wz2bH_l4Qcz8eL3dZV1kmL_Ft3O65tQL-4xxLJnllDgSA3gC35F8yrdAJXJFRC1ptCNWzWm77ubRIrCu2GMV6TB0umSrGU3D0SD8eiR5DvxWoc052uZpSFy2WiN-Jhvf5WQsTSUOFkXtmr4',
    description: 'A detailed concept illustration of a futuristic solarpunk city nestled within a lush jungle. Vibrant green foliage intertwines with sleek, white organic architecture under a warm, golden hour sun. The art style is painterly and sophisticated, utilizing soft glows and atmospheric perspective.',
    author: '@flora_tech',
    year: '2024',
    tags: ['Solarpunk', 'Eco', 'Cityscape', 'Concept']
  },
  {
    id: 'art-3',
    title: 'Urban Witness',
    category: 'Art',
    subcategory: 'Graffiti',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrxoyiVxDvUNrMPJBMS-XYCV6nm5_2YX4k5XtmSb57ajQojwq_8PLBWVnwbQVYpkYSVjjcU4OKpHfCKjbcGdEMqjX-mkkK50zewe2tKdNeBlLbfPtidB0eDAtTLJvXqVSdg_sASflNmpQZoXLTjxVB2QAgEKFJwIzJOIdg2Fyv9pCJDOFeJd8ks8YvTa_dq5VbwZk5V-jB6JBCbT_h2C7zolR0PHi8tVcwS0-xaj6YEdP2iKy2ZKafDLzRZlR-IL7Yj-wJiqo2LuQ',
    description: 'A vibrant street mural on a textured brick wall featuring a hyper-realistic eye made of geometric shapes and exploding paint splatters. The graffiti uses a bold palette of neon pink, cyan, and deep charcoal.',
    author: '@vandal_vision',
    year: '2024',
    tags: ['Graffiti', 'Mural', 'Eye Graphic', 'Brick Wall']
  },
  {
    id: 'art-4',
    title: 'Chrome Flux',
    category: 'Art',
    subcategory: '3D',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaXcykWR4KG9WNCeYFKCDUDlxh6PVVr_kwmjfA8UHekNov4jN5SBxo0W4kJGO4uG7Q-TMRc3zXYErqp_MgdvM3qY3xJ6O3Ix2X8oxyfaSzyiztEd-nWoaZuk-QtPF6VzG8KrDBXI5i1LzUkYxKwU6LUbL-w4cF1Hy7k75bdrC0FPeAQPD_ttY3wk1jvR_c687d1zRDN5MxwKs-uJyujvV3kIMnUj_64pu_j3-x6WvVrrGN2x3k8bJihKCB2Pd3J-EsS7qLoUwr8II',
    description: 'A sophisticated 3D rendered scene depicting floating liquid metal orbs in a minimalist, mirror-tiled room. The surfaces reflect a complex array of purple and blue studio lights, creating a dark, tech-forward aesthetic.',
    author: '@render_void',
    year: '2024',
    tags: ['3D Render', 'Raytrace', 'Chrome', 'Liquid Metal']
  },
  {
    id: 'art-5',
    title: 'Edge of Eternity',
    category: 'Art',
    subcategory: 'Digital Art',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOhvuOP4M3j9ZQEOO6QnRdIiIaun2vT5Pljg0wg4vQSQ6Gze-HicU3uKzIWUfNgiCMaKnYHo_m4h14OfyqJRYXrhPxZsBMjqaGyr1to_iInu5o7-L5WSJlJzeuUhesUXIkXjQfus9giy3wwHPIdgwT1jVqxzjBUbcA8leAlA02k2WA-FYCKQ-7VByIy6bvGUw2D4zeGVmNjSv5f1fTWUmZ8vp_TfwB8oq-EwEf0afcfSkfz-RPbBaKA70b-LfkFK5AMUoKUkAeYVk',
    description: 'An ethereal digital painting of a lone figure standing on a cliff edge looking out at a colossal ring nebula in the night sky. The artwork is rich in dark purples, blues, and magentas, with shimmering star fields.',
    author: '@starlight_art',
    year: '2024',
    tags: ['Digital Painting', 'Cosmology', 'Space', 'Silhouette']
  },
  {
    id: 'art-6',
    title: 'Velocity',
    category: 'Art',
    subcategory: 'Photography',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe6KvwGRbpoaMZsQUNMikfcE9wkyOlvxpXxDFuEywLxy2NML8UCcucKLjIKdehGR61WZN-o3RLF-_fW_CSXcu4yr1MTWuCPpFnFXG-o1XVD_CB-Ts26Hpoa-QfAw2g_lv9ulyx2kXY5V76t-yJbimN1fSoY0b9FAld83fk5VKiVhESwQ0lzlYofCLfMbcUljyzp3ERjG5OPrFOA90JRpqCsALw8iW4z8m7reIf3EHDUoOzPuBxucJ-A3tyNBAAIW1f2MiAtF-mLjI',
    description: 'An abstract photography piece capturing long-exposure light trails in a dense urban environment. The streaks of red and white light create a sense of frantic speed and chaotic energy. The background remains dark and moody.',
    author: '@lens_blur',
    year: '2024',
    tags: ['Photography', 'Exposure', 'Lights', 'Speed']
  },
  {
    id: 'art-7',
    title: 'Cyber Flora',
    category: 'Art',
    subcategory: 'Graffiti',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_St7obnDJbas9tsjmh6ldX3cLG22LdNtAJKvWWAhZSr6IvuxesLlxOA4SUjrhirzqbJpOlL-HegS1LI7UjynqYqM7ICIw_k0IxPnZQWR4rhV98kL6LqmIlvBLL6woqx-jBcvi6RDPgCFJ40QYzA3FJzNd0Q1FGutbNsmay8i6Q1n4o4yw8szUK03t2ALIuu014rgthldLs46-tLWWXZYQisWHn9qV8lxqBVk7BpRL5AoI05qzw0qiCPpreETPonp-s_SY0Px1BPY',
    description: 'A cyberpunk-themed mural featuring robotic parts merged with biological floral elements. The color palette is a striking mix of neon green, electric blue, and matte black.',
    author: '@neo_wall',
    year: '2024',
    tags: ['Cybernetic', 'Mural', 'Graffiti', 'Petals_Mechanics']
  },
  {
    id: 'art-8',
    title: 'Crystal Tide',
    category: 'Art',
    subcategory: '3D',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2lg_yzWsu8CjhPDvRSDwMLfJDyljN3IGIMNHsfcaEJ1DYF3P8k3Z8-OPD3Abq6FFUagGXSAI_VASGMremhGwDE19DnIhJj68I_mJVRaNlJk4rL9_PnAUdrFS-2zyLNSzg6eDs6-KB-m9Buhk3Ds1val2uS6R8lfFdBjfLXB6xZwYB6O4Ma7_zBl4MXyq8vRxKUYCExipOIuxQuKHoFoNAnudwnUNfjPLijwB9tK4VGlB16hrqZkQ-h2hXkyNb59EZ07LvRQqJdpQ',
    description: 'A surreal 3D scene of a crystalline mountain floating above a calm, purple sea. The lighting comes from a twin-moon setup in the sky, casting soft shadows and brilliant highlights on the crystalline facets.',
    author: '@dream_weaver',
    year: '2024',
    tags: ['Crystalline', 'Twin Moon', 'Calm', 'Foggy Ocean']
  },
  {
    id: 'art-9',
    title: 'Digital Ephemera',
    category: 'Art',
    subcategory: 'AI Art',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm7AV3Vc2G1dHWaI836TPEkuXvFZyNCW6D5-AOAkz5F8aGc2febAOI9tr5ZyFQ7IVwoVp_53M7irodabNjSgHMaZ0P5OPI3lPxPmT9r5Akm8IkNn6Rye_aKHhQBflxgRGRDUqDjkEM75-FUC9BENPEBrW-fNtkNvHBnH_xVMeNN2Cvht0x2YTVFRvNmp6sl6Q1HMgT7THb2XR8iNYFC08rakhGJGGd4p7JlL7Vfq_TXSzdgLv-PvqDA8PaxM9fQfxxoei9oRe__II',
    description: 'A stunning AI-generated portrait of a human face dissolving into golden sand particles and digital data streams. The lighting is dramatic and focused, highlighting the hyper-realistic skin textures.',
    author: '@core_ai',
    year: '2024',
    tags: ['AI Portrait', 'Disintegrate', 'Gold Sand', 'SciArt']
  },
  {
    id: 'art-10',
    title: 'Curvature',
    category: 'Art',
    subcategory: 'Photography',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiXlWxliF5bR6-zYk8OFx65S8vVRxFLBEx_mE4jZm4fxXHVpYhWmeVr3sR8lXS9sQnweeo-INYlM3hiZcP9vsljHnQNOJQ6h3GexUyIwffvbQ5zxNRUPeJtkO-El70G9suIQSlY5NMa-pOXIsjM2z6Pni1VqbaRt9UMcorz1WFawuSCFHLEGoVW698HleuDlqCPszJTUWFDf_LetsRjx9L74mnNfkfcq_WHvq2xLRskFtNwKltpnO5kwXLCYdWYHy8JnldcGXwoHY',
    description: 'A minimalist architectural photograph of a single white spiral staircase in a vast, dark concrete hall. The lighting is stark and directional, creating deep shadows and high-contrast lines.',
    author: '@arch_eye',
    year: '2024',
    tags: ['Minimal', 'Aura_Concrete', 'Contrast', 'Staircase']
  },
  {
    id: 'art-11',
    title: 'The Scout',
    category: 'Art',
    subcategory: '3D',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQUIAXD9cGvfPkPsozfq5jpqJYjB5-4INqOhLmUw03VFzIavow6JAwXTGk5trSQye9m-RjdiXYxJD8y3RArQRl6cVrFv4HJX-Q-tjal0qWRl4Az38TnhhnyTWobQFvxa5DLU_uZ39dqez1HFZ2JhG-_IWML6_pSplE2Du4PZ3-omatV_sBsoR6ouXnUzfa1QS5x0yMWzrNT-Hz0vtg6etH2xLxkv2ocajxz6BuexN8KmpC5EwOxmI7D_DoJZ61Cu3CvdolqVe3wxM',
    description: 'A stylized 3D character design of a futuristic explorer wearing a reflective glass helmet and a tech-wear suit detailed with glowing blue fiber optics. The character is posed dynamically against a blurred background.',
    author: '@poly_mesh',
    year: '2024',
    tags: ['3D Character', 'Fibers', 'Helmet', 'Techwear']
  },
  {
    id: 'art-12',
    title: 'Prism Shift',
    category: 'Art',
    subcategory: 'Digital Art',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk1Sg35YLSh0OFnQdOYSqmBEHhHk_3mOGJrFW7FqJFy6eQmdHBMz63QDeadGeKqXB8dM32Uj-LUiBynojOcQAbqJulccl-Hu40cgL7FymzYtfuAwxf4_mU1hRU1SqHBA63IRjV7oF0Cv_zVuxo6uC04FeC2X9VOVo-DYyMuSq-4ShG00qR7yaU4ecBjqwdIDyFyLLfl5B73BehpthQwZu1Tt6LuvQLDRapd8kDjS9YQtAYfAOLLujTiCB9qG7Ic3dqlcI-tq6JhW0',
    description: 'An abstract digital art piece consisting of layered glass-like shards in varying shades of teal and orange. The composition creates a sense of depth and fractured light, with bokeh effects.',
    author: '@optical_art',
    year: '2024',
    tags: ['Glassmorphism', 'Prism', 'Geometry', 'Refractions']
  }
];

export const GENERAL_CATEGORIES = [
  {
    name: 'Entertainment',
    count: '1.2k Items',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu3iuM_j5gt_THu71YFgElDeEf-Rrs9dXWqPr9SqQ8IC9x8KaD2gut5SKcIea9HrBW7FuFffV1yMh0mvMG-YGNnj5Iv7oNlzLN0hXhDdynu7qj9EIwsZuSsSXoF8AAQ8rGw3e1VXPc2Ox3jmqbVWBJcJvZ7Bxl_fS56PDCjU-0ODTrEbIm-C_t_R_sWFlrRo2RMgZs7Fkk49EURsNYL-HqYu_9FEqHPl8Z6ZnLRVXmdvUFSZPIUUVFvkPJ-mKoPMDawS2Yy4kLjVo'
  },
  {
    name: 'Gaming',
    count: '850 Items',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj17XeNfBEFDRl3aFUSR07z9V6BQ-7BXEpZw7ORl8OdILt4XbwaRmIuDE4IPY5JhPV6pnC9jHRhA5QoVvVjzA5GjE5shLVv5PZknnI7oK7ysRHw7bm1VpqCZPw9Gg7iFmuqJmEqDPRcQUoTVZm5IU2urej21l0Aq7PyDEJh7C4JZRhBMQb4ntafBJjVsyDGUWxYIaX-0_WddCBj4UTJPKPJHQQl6s27-TzTpaqH8BWDmBZENADajHCb2DkKTiL0vkVbXxqJgl8De0'
  },
  {
    name: 'Nature',
    count: '2.4k Items',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMzRPz6TGrFsZR02DZ-OVAwZp0VR-2WcInc1yHw2wEfzUikh8fB_wv8v2vPd22MxImtzvQZ8DZhwjYxES4PZnz3PhA3h_iRWhDkpn6YzI68KALPtbv4VNPchLf066ngp7qiFfNMOAHL8nSvPqJmgZHVSt_SRCUJ4qwMhx8jJ9m-z8B6_P_5C3i3FOrQkFExxDTKnhlnmY_tbOlWQ8dQENNG5cYjfXyxVrIAXXjkKBBboTAY8mJStAdkeSzM7Y00oNzHwL-z5HAZP4'
  },
  {
    name: 'Art',
    count: '500 Items',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsc-SSltWwsEPqLq7kqXt62w1Z98Dy75dtGnclceRAkjiA-QpUD2kgsGSuTCVL9kpmH2yoxXU5jSb07FRphMM7LmZJFFMbvdhiwuYH0w7gbm-2Oz4269MszfUdxB3bd91Ue1mpQj-HYfD9xK0gK7UDTBzLcBn6qjian1U4YlFRsY5K0hRNa6cGZTXErFYhjpjMPW5r5pco89N2SSfh4kjYaL0lOaEpDCLYva3T-Gcq6bsLC2KSQrcWy9-DAhiO-hd4kOnTUGY94YI'
  },
  {
    name: 'Sports',
    count: '300 Items',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeNjbhnvxzNNiMe2FQ1amzdqvAHGBVFneIjt4LY0v6Qu23MyvgE-DuRc-UEZFuwbsxm1XkBTruyzWlkkhG9u2ovbiSGzLWfb5e1urhiE7sLXo3M15Qz8BJAD03HvqI1ysXZ8MfujtJ9JSrwgKx0hyXVPNT5bxqXHluD_GyNVGNTyW-rVEZFX04E2AscNg90rJMZW5lNFgvK4kmPQ4lmjuNPixhpYOVydk5L5BIFzQoHnH1pe2fVvI-mTaQiYSWJJFdWKZKAxQGD0o'
  }
];
