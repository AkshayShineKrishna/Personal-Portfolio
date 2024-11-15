'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4282282cec31102145ee97f15a9696f3",
".git/config": "2f291d6eb3b4954018af9ae51f608e97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d018baf9dad55970bf7e6d3a2b959d99",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a0044583830dfab94c6ebefac19d1f64",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f4328bb38917ad342dfec92ea495fad",
".git/logs/refs/heads/master": "7f4328bb38917ad342dfec92ea495fad",
".git/logs/refs/remotes/ASUS/master": "75aa076b01b494b7a363e36d05cac7f0",
".git/objects/00/d9d8f81bab9a5e4ed22a58c124ad643c002ce3": "864e2c3abb3ebfa04cf820457fef41f7",
".git/objects/02/5c8e3c0e11f27574ef4705b64926a9815dea17": "c559e3e95da34546622f54f0587819b0",
".git/objects/03/1f0f54b9fd570192f836a1673ea9fa93a8f0d0": "bb72b844f19819497606047d6312091f",
".git/objects/03/9ed36b54b0ae79086f78eabd709ef8124e8d8d": "c971f2431d469d87dca3d82a32e62a53",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/635a2c64be83270a4080a706947d92e95ddd0a": "d3ac19647ecf1b4923c4e7c8ec89d494",
".git/objects/05/4b8f9c378af9ca3fa05859f44c8e0dc0983475": "cbf0c62ec1f60325f90cadb59580612d",
".git/objects/06/b807a2b71bfd0820c4b2ce7737ef6014d87131": "72cd04cb29385508c12b19e0327c151f",
".git/objects/07/0f8174cb0ec5f4410dd3de7a040a6015f1ab4d": "f53ddae2aa0ebca9010975dcaf948271",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/ad47e774a5aa4cc9779c6613c5ab692700fe82": "15ad6117d376c7696344be3883644394",
".git/objects/09/94663552903ef75427e99db4e6312837ea7b64": "6fac83f5365dbb3aa4f24ad86a5b1cdb",
".git/objects/0a/b3eb19ab75b515a62b47f1d6dfde40741f78bf": "38fd8b46db8bad88e98daaf948322faa",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/2110d51e8416b4710887861c00a2859215e1ad": "0759f988c2798b2a830b4c8cee7cceb9",
".git/objects/0f/a0df7c1aa41d80146862b7a1a88e9395e5e13e": "0ff20bf6a4077358efa1d9814041dd0a",
".git/objects/0f/a4acb95eebab8b5952ecaf985d3e8501c2bf72": "b11f2f8fc6dc72afa5faf1c589639189",
".git/objects/11/1b10a55327ffdbb974d885acd0a1ffb24dc6fe": "10f57aac18b8b7f4f96aa376829ecf3b",
".git/objects/13/9c6040f1b95e6b2d450165f1911d592c6423dc": "dea9192a69c0546ae09b6dd1fca9eb7c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/619b67856c4ce7818b17f4f78abdeb4b152946": "1be405f5e187ccfb5e159db2d236e3a6",
".git/objects/19/db7db9d7da4ddf0d8d1a328fbb58ddd736b096": "1a7a9a3b4af76e06d0135b22b6061fc2",
".git/objects/1c/dab718b5dcb44123b4341ff1c3ddd86efed4eb": "2fb89ae75d15e8190f2ef4b7f47d5ebb",
".git/objects/1d/4b42ed3f9faf74bf494034f3bff28306b1918b": "3a868d3ce6055ea70252efadfb5f180b",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/fa595445c3d00f06443cb34a9ea0450f88ccc0": "b521fa427036c2e2819c5cfd96e036cb",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/9eb8b3b4ce56ce2c687747e538048097a2196a": "876cf6f29bccae06f3f4f12ffacbe7b0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/4e99549c5949fa5bbd3fb98c5c97d8b285aada": "71e228f436040e055c4aea080bd0f90c",
".git/objects/22/2aa6cdf1767580d6034b0cc27970cd53b9a6e5": "a35e187bd07aa743f9df04034b98a02e",
".git/objects/22/d24ef161253f3222163878f2e0ac9dbef43ab4": "a0e449d9f2aa094d025c0dccc95e03a1",
".git/objects/22/e20dc2f4c94ca3f856b618ea4825d2a70742b8": "13f36fe7b3e45424b25f86557f3423dc",
".git/objects/23/879c197664f284579f5fda4125b2507ba57ef5": "51c3b677b3cac8a2f5fdd9802afe8098",
".git/objects/24/ccf6ab2a4b69f63780c6dc1a79a0b1d85eb34e": "c3ee38adfad48c78c031703c43647017",
".git/objects/24/d6cf20b259af427b8c1d82637c4d682d479c8f": "928ce0f66270873addc1267ecb00fa68",
".git/objects/24/e2a7fbf7c16758de24a63b2a2d8137f0dcd789": "98a6373a5f93f1bf72c05dbd497d8aec",
".git/objects/25/5ecb7f7667c16c581996b8f2d5eb54dc40c81b": "efb8dc2ee3d97c5281effa4b7d95494a",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2b/84f90a6ece2e66517f9ef5bf9fcd96e3f3ddf1": "88478c0c57ef2658ed8b06f8ff00614f",
".git/objects/2c/263853c70a6f3a66ed8a48e39f4e6663312354": "96a65700574f6fd6ad5357136f1847f8",
".git/objects/2d/f63c4e0c8f8eca8fcd249871ac95b0ecceb9a4": "caaefc454e0073fdf6b992d904571099",
".git/objects/2f/91ffa979cacbd5131ac5b636c531c75453a901": "e75e983b8299ba043ad4d11370d3650e",
".git/objects/2f/d2b7e9be6a94c7913e2fdb22f3eb5ee8fb632f": "70012308c117ac804091930ddfc701eb",
".git/objects/31/eefb22be423fdd8bf7b751e322fd69ea806462": "87a602f9088494691fe9adbe9f77cb60",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/e773e3529fc4245143fce16029f15b962bd5ab": "7406e2a9ed2d5e2d380351a76441a464",
".git/objects/37/5bdb68bf808833cd480fef2f56384e66fc9c63": "cb0ea89b6364f25a3e4deec395e00950",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/2d0ac2753822d47391236ce6373ebf3539c1a1": "ec5e36e705e599622eaf35fc5f4e4b92",
".git/objects/38/b4c32a180c96f94674d960eb0bdfb7785751ea": "2c3a02a4bff88df2ea243ab8a4295c76",
".git/objects/3a/6f1ec28345d50c52142df355cc39ec2770edee": "b83a186a4595b6a59f234b29bd1c7120",
".git/objects/3a/a490cfb2de9bc84c7874d0bbe53a06496af427": "83a145b71c4adf129f6ddf4997039c7f",
".git/objects/3c/5434da7098168057b98065da8cb0c027fdf071": "085bab00fe9be862939130d18ae3c0a2",
".git/objects/3d/1f6d53f96010c2a5c4f8ce4213375df23a4064": "9d7d70fe1ddd4a25a972632572c03de1",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/3e/b0a875f0a961301c59eae88266cf0276085745": "3c6647002716b4472ef38a7a6e67efa2",
".git/objects/42/926b95bfeb8e787c8f709d7847aa787ccb82ad": "d2d351b31ff51c4e160353e8650f581f",
".git/objects/42/d17e527d1ff95c17533ab7d0735c10add2034b": "5f96c480f46b2f5ce607318d0e237842",
".git/objects/43/47f94b3a41eaff5926b6af41892a8b226c14bb": "4305c867f52863cd1081dee04203645b",
".git/objects/44/3030d78da8a55339566ee9710cc8003c70e48a": "71122a83abcdaebcb57e9654326a9398",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/e11730e2b3572e2d4df44af25be5179cd5c633": "2339f89da5d7d20803833cb15409cb21",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/6bae8ef322dc995224cb8728edb06fdbfacaa7": "b40d49b280af437a0e9162556f1dbf79",
".git/objects/4b/9d8e660a492b928d340c85f037d70a4cd85a21": "c333dbd7b1f632fe09c2d3209b4888a6",
".git/objects/4c/ffd4957010a967ad1f57fef86a2e9bb7bb06be": "2584619ae6653ad25d6b46bd9bfa3085",
".git/objects/4d/3562533a7969d9c973ef877a7a9912cd4f788c": "1e69683d4c9a5c3081fafbc3ca762f2f",
".git/objects/4d/c928a777c4e94872bc2d55c0b15b20217e5be4": "830b0fabf63048030eaaebdc8d6159b4",
".git/objects/50/757b376798413e625d6bb7c62c5edf04552bd1": "22ad11cde74bfe15f627ba5936a75095",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/38977219686da728c3cb34a1e4b94e87178ccd": "8918c3ca3899bd544beaaeb5af758ff6",
".git/objects/52/806bb9c3818f6fc4ff21db6562fc60ab26efb4": "8e0697c0b250f58b56b453ac7d531566",
".git/objects/54/fa1b36b503edffd4ac265bb325f7f4093a58fc": "8c696221523c407bce4e07b30c212a40",
".git/objects/55/d20637fc1693112c7bfba10a40bb4a67ec29fb": "7bf08d2474e8db380b7bcbcb944eabe0",
".git/objects/57/14022bf06aff4353b777dbfa0cd1494e4b02f6": "fd2afacb6083c02c3670d13a869e4368",
".git/objects/58/03d7a8aef5536f76776912a175ce002fd7a2b7": "53105bec99ed18c825bdfbd9ca350e4c",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/b98908eca688197b9367865a430bd2ed404832": "30953e16181f5112ac4fdd1d748e260b",
".git/objects/5d/4dabe01fab1b38827244deda2d2b7a05d1028c": "a94066d7c685d50c29a53c2b99f39dd8",
".git/objects/60/99ac2a3d2b415c5265751da5d7fab8a48f872b": "406c77ba2420f1481bd54162f757efe7",
".git/objects/60/accde6876a6274c95617cb22e87ed9a0d911b2": "d4ef1f263e1e55750219fdd61e6eb542",
".git/objects/60/f9df1bddc50a2faf353de83d378e0c308d7fe8": "7884242d007d1805e203a1a9ccde0ace",
".git/objects/61/28c1f12cfce4d7e48e7d3020651f5d637f1316": "23b2e6bdaefc5a9e9fc0c967f3e01b0b",
".git/objects/61/883d4ec6f202a8eb192133c9fa743467faf8b7": "896b0fad4d79cd564f9f2e2feb4ec924",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/ef1faad37a001500732b44e3683669a6f1089d": "63f2fe0b758eedb594d340271e8f8a5d",
".git/objects/69/1cbb0e4ff9ed1fa1d854e7e06b6a682ce4470b": "4765a967551a9c93f34bcb26e90968f5",
".git/objects/6b/577306372bc33b0ddd26f0cf68e408dd268409": "8129141f4283bf71762b3ea3a87e50cc",
".git/objects/6e/7a869672f41747a3ddab0d00735752e01b9c00": "b51000344555e3aff47d3647ddf9b6fc",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/a30b25b32e7fd19778365b6d7fa9cd4cb82b87": "eb597ba59ee1e47cfa02362350311ff6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/391a81dfb4f1c1837b28a1a57536b2687ce28f": "7aeee6a145716c84d5b7dfac7fe27d30",
".git/objects/73/1ff3e7b1fc3813aced285f771c70412f80ecf6": "cfc6e632aeccadbd1907138420f7a24b",
".git/objects/75/3d53d56f4d730d12fa508bd7e0e148604bb95c": "b09d624221a8205a265831f475f4a572",
".git/objects/76/640d3c923d074cdfe01ccd14cfc4ebcd65af12": "2639d234e4730a488788831bc530e7fc",
".git/objects/76/86a09881bd682d21b9a403ab76060e62b3887c": "f04975ab82204707166a72ef469c64e6",
".git/objects/7b/a10b7cfa35391c7109715e61951a1f8a12fee0": "313d2c15287d253a40dddf342e579c21",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/25e05c8c061737b5b8701dc8cf55d89413482a": "2d6c7d2ba99d3b36a26b71bfc9e681db",
".git/objects/80/0542a3c34469e03612a94fd825245bca11fe79": "aa44b867f993725c5831e9ce5d5e8065",
".git/objects/80/0eeb0f55dd9bb0e7d0d8679142b3051427f537": "f902a0c474fff38b327cf239fc20e124",
".git/objects/81/16d7fa8910240a006268b98e755d611b14d600": "421e023ecc1e93dbb6472ebe670c74a5",
".git/objects/81/f91f9639dc746abba5101eaab33034b78ad602": "04f9cbde167793a9e4e2e6d16566b08a",
".git/objects/83/8e56158034ccb763b7c552219093165ef83d78": "f471f1bb03f58092a67f70dd97065a68",
".git/objects/83/8e80678d2060d343bc04c9eb2108504a5d4820": "2e196edccdf507e037356245b1f9b6b6",
".git/objects/86/82da2c95aa8129ad4f776545edf68cee392247": "00a8f715a14513539b6c05a8ffd0358d",
".git/objects/87/6ec2270f4d80f42d9fb3d5a900977cd1fca30f": "a85f5cbfc0f4860dc6ea05a6eefd60a9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/44961bdc15b0758eb5420abfd5d126c7071092": "92f4d55982f43258c3e7382051a0f6d7",
".git/objects/8b/a10a12653051700c3a043dd07c85ab06d40f19": "4e9fca034ff9d8429260bb181310345a",
".git/objects/8d/9cb65697803b844e171b7843f1aec10c76dd30": "388bea4249bcd0c03ea3f18cc1fe0992",
".git/objects/8e/808e7e93d71f50d16a13ebac977772a53784f0": "8a5be157895136f2f69846c8e753320d",
".git/objects/8f/52677b44cdd14d9ec19a3c8edf742c2172417a": "5a4b8dcd90844dc91492b99723bd239c",
".git/objects/90/027f07f5372f7c57e32909859a0ed86aa26a1c": "30b8e3c5de5aad3fd6edc8b2e2b60680",
".git/objects/91/6adeec10d1009115f3ae2db06e76244def8030": "b8be669c337ae71e7ab9cd448c1338df",
".git/objects/91/79d28de950fd8ee1650ac74d2817dcb44e076b": "53aae7caa01fcf16715de81e49c61db2",
".git/objects/92/24a413a881a02de5f7b208a517dd88a285bf84": "6387fe90cbaca45880c57f13c756f136",
".git/objects/92/3f87dd15d588dc294cae7df6f309c1ea4c11c2": "f89a1e3e2dd0a0d009cf8371815077d9",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/d60d31958b45ee326fbbc6bdcae3835a7a89db": "3f8be61b287497698f7d1c18b214d3e2",
".git/objects/97/b7d7f379196bd34fd7400fa5a0b009ba277b24": "123c178adf3c6f111f624e82c049d840",
".git/objects/9a/bbf50f4f44c1b799345acec4578c32457fee82": "c461552a2ed655f0ca2974b36842ed80",
".git/objects/9d/2c0c68b12b7d83000dc9116c9b1fdd2dcc59c2": "a145e02f7ce25f11202b98b09f56d49d",
".git/objects/9d/59d1f68237dfd94f56ed49bdea493bbe208544": "79cdaa907bc42faec608211d79bc7e97",
".git/objects/9e/de0889be19e2c01abe95fcf7ba1cb2a2cee2d6": "3a99fa954248a188c5cd46204d27a5be",
".git/objects/9f/c94c6f956ec8cd0547525f380dfd0052d5b559": "96d541895b6aeb58e83f407a4375b42b",
".git/objects/a0/b29ab67d6983b913c6db77c9ec00a53cf02c46": "8a277ebdf1b4e8e2bae62fdce5ff3acd",
".git/objects/a3/9c7c124bc63f58d60f15cfd4f7f45cad5962f6": "7ff4b00b04006e09080c2f2965822a63",
".git/objects/a4/272c7367bbd41f9020b7f16004ca8efa1bd092": "79c046d38e43da2da73ae915ff8f2bb8",
".git/objects/a4/adccca406826b7ae09a8d34d201f6c08c914b5": "b0683077fd18b9e5a216528e96bbff6d",
".git/objects/a7/8c5c8d246ecdec261f9b684ae01abdd02310cd": "6c81ba33b15ec53c98f3b37c5ec07ce7",
".git/objects/a8/fdf30c75d28e873675bd0d39c869da2d333090": "2124e6df0dcbe316eba63aeed817eaf8",
".git/objects/a9/a1e2f38f082e28ff8a718d950752736cb958a0": "ce02f82d97691c67ebad0c8142353037",
".git/objects/ab/e8bef3207b7828443fcc76efba839d55cd796a": "fd2841ce5f4ee4657fd24da610963e64",
".git/objects/ac/7d9545c89f4881f9a63944a70b110c81b50f85": "8b5e332be9fb1b48e1ebf553e31618ab",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/9250db9730adf28fb970d3fb1d3239d5a6d984": "52b0d05f959635c9eca89dea638f881d",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/d398f18de4a58449f09e6a35e74ab76096c9a1": "3fd9dd1224227cdb7e68b9e7e9196347",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/52706a8b6f37182e2b991d39fc984b6d375e33": "b77eaaeee2082f506ac863c5fdf0399c",
".git/objects/b8/4b7c41ae8a5845a10390622d0dc0211fa63be3": "a9e158107e4469a99f9e0745fae81347",
".git/objects/b8/c9f46dc551928ab149dbe24158aae402a52486": "a077904a425331b21facb65486854506",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/b6467c433de6de11261014688f107968024cd1": "75f5e1ef380bcb456a9b57954197d0e8",
".git/objects/bc/fcc36505fdffcab842544bc1aa7fbe06f68463": "d09eea05929cd59c69695c95667ec75f",
".git/objects/c1/3f303744ee9a2201c08ca224583a5d31393ea7": "f7a4fb4801a8f86f8f018abbc89fd497",
".git/objects/c2/06aff5d7d78b52d01defd9472dd6198ed3b43a": "b8c4a29599f8a2c5323b4430487dc473",
".git/objects/c2/2952a9a2199671b2a5dc11d6e7767de4a63dd2": "434cd19f2dbd2f0ff0a63332d14902cf",
".git/objects/c2/85fbbadb6db8a8856b064bc2a2032b59c6f049": "698b6d31a364a8d0f6b4c30e4a7a4f4b",
".git/objects/c3/9db098ea27c2ae69d11b50b2834a225c4aaf4a": "fb5ba43e9807049d5d10df15276be66a",
".git/objects/c3/be3cc333a47fbdfe05b2f11fde0f0ce5884c28": "edbeb388f862488ceed55ec95bd9ba40",
".git/objects/c4/276791d2ad9af5e2b5d40392d08bfd950a4c1a": "299111f1fb3237eabec863875679bdf5",
".git/objects/c4/39cef9c019ddd99033c8fda09f086cc67eaa3f": "a7b8a6d0b208240d21a3ff15d9d4abf9",
".git/objects/c4/68c1fb0c5f74b0ea54abc65a94caadec67eb92": "be4bb745a829bb0cdcdb0ee8a0e06e58",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/c57e76ae92e47a6708f7c2d08371deee4f0e04": "cd7d1905e10679aea0c59653ab9a6f66",
".git/objects/c7/fd93ae1e9bb75526c87260718d94c850ebb444": "f1cbc1d8d24539e78133e6fbde2618c7",
".git/objects/c8/e5cc478cef896d1d385a0a3221744adb857748": "cac2ca5582bd5eb7bf76a37032e18c1b",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/34cdc6c7a840050d01990d7967c5a0c903e08b": "7fb063beaae8332951ae43836fc87c1a",
".git/objects/cc/bb4aa3c6cc4d946698907feba825d7bc4cb232": "6fbae8626d5c520c0a6a060072e6de1e",
".git/objects/cf/e2d79db0ea5c55e3708b2e7a918b453c9645c0": "ca71529e794ef9d0b9ff7eb51705139b",
".git/objects/d0/97b61f0b52ee273d386367700f6db9bfe535b1": "b55fe2d7c511728dee214ba7ddade206",
".git/objects/d2/974f8915358114df9350204f01914c6522bc9f": "125b51875aea2eeeb94270ff7ae30bfa",
".git/objects/d3/41125599f683f3ef46a4055f77edaf9bb47aa3": "2c7522998ea624d2336ccd7a7c2986a3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/541501c770597881f4fd642b16309d48a34916": "df81d3e8f0fac58cba3a43407fccb1d2",
".git/objects/d5/cb918023f181450030564860b05df40b80c831": "0de6e9db2cb9f5101f02b56feb68a990",
".git/objects/d5/d32fa9888037e502f8e7a1afa65ad7395adc9f": "a05b5b274849d5e9c89264b57d63db75",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c39d68db40c831daaaba3dfa167fedd2d530ca": "758f26a751210795fefc4c2d34536664",
".git/objects/d6/ca7469104df02174f771dbfa74746dc988db4b": "b85f13c7e2b83811ed74001265b6bc7d",
".git/objects/d7/0da09c174df5fd053893c650ff72671769ea21": "fde656499677317984a2c1cd32d086ab",
".git/objects/d9/26488eb3c8d9b9c066e25b72c1819bc4b91c14": "76d6f91c28aba0e39f2adaa9ed403b0a",
".git/objects/dd/5d75c0c683330ca95ac99d48542306b97ad6db": "7cc1ded0155dbe4d46b6b3e4580384c6",
".git/objects/dd/69f32cc8e57fb66462cda98f8be517395859eb": "ced71f7e55ed0f9b3cd9a695734b777e",
".git/objects/e0/78baf1feba956ef86144f8ff6ca511c3e23f78": "93b96c8c85606a803c627667ce9a7526",
".git/objects/e1/8342cb7a5085915191f13d32ce7ce9b09bf107": "8e09fea7bb94efc573383f7e9d91134e",
".git/objects/e1/e06964f8fdee8aa6ea0b5492d79d8c4b0beae9": "446495068a5b1e50cb37be45d4891569",
".git/objects/e2/71f0a1e2938d9999a6836bfac4c8d017d9b92d": "942af9ec92fb00ab8c7e775c3b152eac",
".git/objects/e2/a54d9b6fbe43ccd7c613eb87af47d6bbf170e9": "0828fd10ccca3c0aca59d8f321db33e5",
".git/objects/e4/107abd501cfb7884e1f6f197d769643fe005ad": "0b45f293f00be760aa2e63c7a220bee3",
".git/objects/e6/a4a02ee567f6178b9e532a5ffa3d2465a91617": "a3e201b8616d46beba2b2524af4bd768",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/3542173d9ccb9432aa23e6f28f5bdae01bee6a": "64391ab7d6870acabf3448b18417b846",
".git/objects/ea/16c1d3a5f7a40e3b76f11a022d4ed4081bc15c": "21ac60e349a152c97dbaec6ca98c2779",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/fa63106b8d021cb0b86856509e3bac383f6068": "120568928f8a9deaf96c431ddbb4367c",
".git/objects/ee/1a381fd39f4ebd63f5e9c48d91709330ede945": "a6cfc7eb8c400891c0283f1e9368cdd7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/16d6723c30a234bf6b7da72f18e7e33dda261f": "eb52d8e279579c85082cb29d0a2f3c2e",
".git/objects/f6/d70eed813752f76511ade35377fc13806969e9": "70da1b5c37ee9b941bd8698d92db11a4",
".git/objects/f8/cb97846aceb39a9a946ed148836f43c41df3af": "9b8e529a7e5934651b537849a21f1b42",
".git/objects/f9/d00fca3319433aea91e12b39f92073deecb8cd": "91846ddde21931cef40255aa87424b9a",
".git/objects/fd/9560649bc50892a81097719fd0350985a63e93": "e0d8dd3414e780337ee5269013b316bd",
".git/ORIG_HEAD": "6a25db6f328c87270da21c41490b6b77",
".git/refs/heads/master": "6a25db6f328c87270da21c41490b6b77",
".git/refs/remotes/ASUS/master": "6a25db6f328c87270da21c41490b6b77",
"assets/AssetManifest.bin": "515b238db704fc7fe1e51a6886af1cbf",
"assets/AssetManifest.bin.json": "10b90c249484305d53574b34e9f99ebf",
"assets/AssetManifest.json": "bde1ba4afefc1bcf0e9efca348fe8e5e",
"assets/assets/images/about_pic.jpg": "1b487ca869a0bcde9b4449c6e0281729",
"assets/assets/images/bike.png": "5c0056e0e7542dfa187335ba7e938da3",
"assets/assets/images/bodhi.jpg": "ccb108c7a60911a72a47914444c274ca",
"assets/assets/images/c.png": "1dcacdf0f51c5a0dfee7909e398c9c86",
"assets/assets/images/css.png": "0313f5cc89e2924223c383f38ded3605",
"assets/assets/images/dart.png": "0a268d67669f6dd4dd3ff982a4e13b54",
"assets/assets/images/filmate.jpg": "434268504d747f30257679f753eca5e8",
"assets/assets/images/flask.png": "51ed6c89bb179da3572ab8dd3383d628",
"assets/assets/images/flutter.png": "209c5473f43076cc9391775aa640bc32",
"assets/assets/images/ghub.png": "48c004c70670aa9452b62a39544ab42f",
"assets/assets/images/git.png": "c6bd4bfe0cc911fdc48e3754dd312635",
"assets/assets/images/html.png": "d249ea8c51f205347ee18003eefb7712",
"assets/assets/images/hub.png": "5526f2152b1adc21a61c42f2763fb811",
"assets/assets/images/ig.png": "b236690c468e703839ed3218a1a6ebb8",
"assets/assets/images/in.png": "690e0f0ac00a94046b4fa89fbe474433",
"assets/assets/images/in_flag.png": "6d8559da2f267a6ef5e6fc698120e0fa",
"assets/assets/images/java.png": "9a1021486242654a1761fa4739233b0f",
"assets/assets/images/js.png": "e569fcf0a4aa499c31216489183362a0",
"assets/assets/images/mail.png": "e5f25f0e5dc090aae03928a0bec3bccb",
"assets/assets/images/main_pic.jpg": "cc79ff022b9152c168197de3202e533e",
"assets/assets/images/mob_pic.png": "b123f36e79d4baeef628991e7e1837d7",
"assets/assets/images/netflix.jpg": "2dc97c5c418d610350595a7349ee6505",
"assets/assets/images/pic.png": "9386dd7a4b3d93340936540659a9de30",
"assets/assets/images/ps.png": "4808ceebeb847dfb8bbecc4447519485",
"assets/assets/images/python.png": "2109487c462028bb7d8091d214e73481",
"assets/assets/images/quiz.jpg": "283e03bfa15ac4d736eb2f145d7c5925",
"assets/assets/images/sql.png": "e5b7d954ef2cf6bba359c09e7e364262",
"assets/assets/images/steamy.jpg": "66d326e9713ab608f9ec8d5bd24d08e3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9ecea12c2df177d10d280a2cdbd01494",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "59258b948c5200d513562daf675859b8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "001f294b2a1a770c3a18606524741778",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-512x512.png": "0017ebd87d36218c526b37f374ef5497",
"icons/apple-touch-icon.png": "0d319590a5c6a83a7ec58858565f6b98",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ec851d397eadd5208e0d2425f0e65420",
"/": "ec851d397eadd5208e0d2425f0e65420",
"main.dart.js": "0d6f9456ed2f40153531fde2450cbfa0",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
