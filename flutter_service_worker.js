'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ddd05d39852e74d51a7099da6f317702",
".git/config": "2f291d6eb3b4954018af9ae51f608e97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5a948cd2b55f3c3d82d6bf317475b79f",
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
".git/index": "0c5ff4fd8bcf0fda227ddb6029887bb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dcb449d45d1d5081a819b254b922eb94",
".git/logs/refs/heads/master": "dcb449d45d1d5081a819b254b922eb94",
".git/logs/refs/remotes/ASUS/master": "85b0b235f2ec27145588127e23f066c5",
".git/objects/02/5c8e3c0e11f27574ef4705b64926a9815dea17": "c559e3e95da34546622f54f0587819b0",
".git/objects/03/1f0f54b9fd570192f836a1673ea9fa93a8f0d0": "bb72b844f19819497606047d6312091f",
".git/objects/03/9ed36b54b0ae79086f78eabd709ef8124e8d8d": "c971f2431d469d87dca3d82a32e62a53",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/635a2c64be83270a4080a706947d92e95ddd0a": "d3ac19647ecf1b4923c4e7c8ec89d494",
".git/objects/07/0f8174cb0ec5f4410dd3de7a040a6015f1ab4d": "f53ddae2aa0ebca9010975dcaf948271",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/ad47e774a5aa4cc9779c6613c5ab692700fe82": "15ad6117d376c7696344be3883644394",
".git/objects/0a/b3eb19ab75b515a62b47f1d6dfde40741f78bf": "38fd8b46db8bad88e98daaf948322faa",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/a0df7c1aa41d80146862b7a1a88e9395e5e13e": "0ff20bf6a4077358efa1d9814041dd0a",
".git/objects/0f/a4acb95eebab8b5952ecaf985d3e8501c2bf72": "b11f2f8fc6dc72afa5faf1c589639189",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/619b67856c4ce7818b17f4f78abdeb4b152946": "1be405f5e187ccfb5e159db2d236e3a6",
".git/objects/19/db7db9d7da4ddf0d8d1a328fbb58ddd736b096": "1a7a9a3b4af76e06d0135b22b6061fc2",
".git/objects/1c/dab718b5dcb44123b4341ff1c3ddd86efed4eb": "2fb89ae75d15e8190f2ef4b7f47d5ebb",
".git/objects/1d/4b42ed3f9faf74bf494034f3bff28306b1918b": "3a868d3ce6055ea70252efadfb5f180b",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/fa595445c3d00f06443cb34a9ea0450f88ccc0": "b521fa427036c2e2819c5cfd96e036cb",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/4e99549c5949fa5bbd3fb98c5c97d8b285aada": "71e228f436040e055c4aea080bd0f90c",
".git/objects/22/2aa6cdf1767580d6034b0cc27970cd53b9a6e5": "a35e187bd07aa743f9df04034b98a02e",
".git/objects/22/d24ef161253f3222163878f2e0ac9dbef43ab4": "a0e449d9f2aa094d025c0dccc95e03a1",
".git/objects/22/e20dc2f4c94ca3f856b618ea4825d2a70742b8": "13f36fe7b3e45424b25f86557f3423dc",
".git/objects/23/879c197664f284579f5fda4125b2507ba57ef5": "51c3b677b3cac8a2f5fdd9802afe8098",
".git/objects/24/e2a7fbf7c16758de24a63b2a2d8137f0dcd789": "98a6373a5f93f1bf72c05dbd497d8aec",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2f/91ffa979cacbd5131ac5b636c531c75453a901": "e75e983b8299ba043ad4d11370d3650e",
".git/objects/31/eefb22be423fdd8bf7b751e322fd69ea806462": "87a602f9088494691fe9adbe9f77cb60",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/5bdb68bf808833cd480fef2f56384e66fc9c63": "cb0ea89b6364f25a3e4deec395e00950",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/2d0ac2753822d47391236ce6373ebf3539c1a1": "ec5e36e705e599622eaf35fc5f4e4b92",
".git/objects/38/b4c32a180c96f94674d960eb0bdfb7785751ea": "2c3a02a4bff88df2ea243ab8a4295c76",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/42/926b95bfeb8e787c8f709d7847aa787ccb82ad": "d2d351b31ff51c4e160353e8650f581f",
".git/objects/42/d17e527d1ff95c17533ab7d0735c10add2034b": "5f96c480f46b2f5ce607318d0e237842",
".git/objects/43/47f94b3a41eaff5926b6af41892a8b226c14bb": "4305c867f52863cd1081dee04203645b",
".git/objects/44/3030d78da8a55339566ee9710cc8003c70e48a": "71122a83abcdaebcb57e9654326a9398",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/6bae8ef322dc995224cb8728edb06fdbfacaa7": "b40d49b280af437a0e9162556f1dbf79",
".git/objects/4c/ffd4957010a967ad1f57fef86a2e9bb7bb06be": "2584619ae6653ad25d6b46bd9bfa3085",
".git/objects/4d/3562533a7969d9c973ef877a7a9912cd4f788c": "1e69683d4c9a5c3081fafbc3ca762f2f",
".git/objects/4d/c928a777c4e94872bc2d55c0b15b20217e5be4": "830b0fabf63048030eaaebdc8d6159b4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/806bb9c3818f6fc4ff21db6562fc60ab26efb4": "8e0697c0b250f58b56b453ac7d531566",
".git/objects/54/fa1b36b503edffd4ac265bb325f7f4093a58fc": "8c696221523c407bce4e07b30c212a40",
".git/objects/57/14022bf06aff4353b777dbfa0cd1494e4b02f6": "fd2afacb6083c02c3670d13a869e4368",
".git/objects/58/03d7a8aef5536f76776912a175ce002fd7a2b7": "53105bec99ed18c825bdfbd9ca350e4c",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/f9df1bddc50a2faf353de83d378e0c308d7fe8": "7884242d007d1805e203a1a9ccde0ace",
".git/objects/61/28c1f12cfce4d7e48e7d3020651f5d637f1316": "23b2e6bdaefc5a9e9fc0c967f3e01b0b",
".git/objects/61/883d4ec6f202a8eb192133c9fa743467faf8b7": "896b0fad4d79cd564f9f2e2feb4ec924",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/ef1faad37a001500732b44e3683669a6f1089d": "63f2fe0b758eedb594d340271e8f8a5d",
".git/objects/6b/577306372bc33b0ddd26f0cf68e408dd268409": "8129141f4283bf71762b3ea3a87e50cc",
".git/objects/6e/7a869672f41747a3ddab0d00735752e01b9c00": "b51000344555e3aff47d3647ddf9b6fc",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/a30b25b32e7fd19778365b6d7fa9cd4cb82b87": "eb597ba59ee1e47cfa02362350311ff6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/1ff3e7b1fc3813aced285f771c70412f80ecf6": "cfc6e632aeccadbd1907138420f7a24b",
".git/objects/76/86a09881bd682d21b9a403ab76060e62b3887c": "f04975ab82204707166a72ef469c64e6",
".git/objects/7b/a10b7cfa35391c7109715e61951a1f8a12fee0": "313d2c15287d253a40dddf342e579c21",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/25e05c8c061737b5b8701dc8cf55d89413482a": "2d6c7d2ba99d3b36a26b71bfc9e681db",
".git/objects/83/8e56158034ccb763b7c552219093165ef83d78": "f471f1bb03f58092a67f70dd97065a68",
".git/objects/83/8e80678d2060d343bc04c9eb2108504a5d4820": "2e196edccdf507e037356245b1f9b6b6",
".git/objects/86/82da2c95aa8129ad4f776545edf68cee392247": "00a8f715a14513539b6c05a8ffd0358d",
".git/objects/87/6ec2270f4d80f42d9fb3d5a900977cd1fca30f": "a85f5cbfc0f4860dc6ea05a6eefd60a9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/52677b44cdd14d9ec19a3c8edf742c2172417a": "5a4b8dcd90844dc91492b99723bd239c",
".git/objects/91/6adeec10d1009115f3ae2db06e76244def8030": "b8be669c337ae71e7ab9cd448c1338df",
".git/objects/91/79d28de950fd8ee1650ac74d2817dcb44e076b": "53aae7caa01fcf16715de81e49c61db2",
".git/objects/92/3f87dd15d588dc294cae7df6f309c1ea4c11c2": "f89a1e3e2dd0a0d009cf8371815077d9",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9d/59d1f68237dfd94f56ed49bdea493bbe208544": "79cdaa907bc42faec608211d79bc7e97",
".git/objects/9e/de0889be19e2c01abe95fcf7ba1cb2a2cee2d6": "3a99fa954248a188c5cd46204d27a5be",
".git/objects/a0/b29ab67d6983b913c6db77c9ec00a53cf02c46": "8a277ebdf1b4e8e2bae62fdce5ff3acd",
".git/objects/a4/272c7367bbd41f9020b7f16004ca8efa1bd092": "79c046d38e43da2da73ae915ff8f2bb8",
".git/objects/a4/adccca406826b7ae09a8d34d201f6c08c914b5": "b0683077fd18b9e5a216528e96bbff6d",
".git/objects/a7/8c5c8d246ecdec261f9b684ae01abdd02310cd": "6c81ba33b15ec53c98f3b37c5ec07ce7",
".git/objects/a8/fdf30c75d28e873675bd0d39c869da2d333090": "2124e6df0dcbe316eba63aeed817eaf8",
".git/objects/a9/a1e2f38f082e28ff8a718d950752736cb958a0": "ce02f82d97691c67ebad0c8142353037",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/52706a8b6f37182e2b991d39fc984b6d375e33": "b77eaaeee2082f506ac863c5fdf0399c",
".git/objects/b8/c9f46dc551928ab149dbe24158aae402a52486": "a077904a425331b21facb65486854506",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/b6467c433de6de11261014688f107968024cd1": "75f5e1ef380bcb456a9b57954197d0e8",
".git/objects/c3/9db098ea27c2ae69d11b50b2834a225c4aaf4a": "fb5ba43e9807049d5d10df15276be66a",
".git/objects/c4/68c1fb0c5f74b0ea54abc65a94caadec67eb92": "be4bb745a829bb0cdcdb0ee8a0e06e58",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/c57e76ae92e47a6708f7c2d08371deee4f0e04": "cd7d1905e10679aea0c59653ab9a6f66",
".git/objects/c7/fd93ae1e9bb75526c87260718d94c850ebb444": "f1cbc1d8d24539e78133e6fbde2618c7",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/34cdc6c7a840050d01990d7967c5a0c903e08b": "7fb063beaae8332951ae43836fc87c1a",
".git/objects/d0/97b61f0b52ee273d386367700f6db9bfe535b1": "b55fe2d7c511728dee214ba7ddade206",
".git/objects/d3/41125599f683f3ef46a4055f77edaf9bb47aa3": "2c7522998ea624d2336ccd7a7c2986a3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/cb918023f181450030564860b05df40b80c831": "0de6e9db2cb9f5101f02b56feb68a990",
".git/objects/d5/d32fa9888037e502f8e7a1afa65ad7395adc9f": "a05b5b274849d5e9c89264b57d63db75",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/78baf1feba956ef86144f8ff6ca511c3e23f78": "93b96c8c85606a803c627667ce9a7526",
".git/objects/e1/8342cb7a5085915191f13d32ce7ce9b09bf107": "8e09fea7bb94efc573383f7e9d91134e",
".git/objects/e2/a54d9b6fbe43ccd7c613eb87af47d6bbf170e9": "0828fd10ccca3c0aca59d8f321db33e5",
".git/objects/e4/107abd501cfb7884e1f6f197d769643fe005ad": "0b45f293f00be760aa2e63c7a220bee3",
".git/objects/e6/a4a02ee567f6178b9e532a5ffa3d2465a91617": "a3e201b8616d46beba2b2524af4bd768",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/3542173d9ccb9432aa23e6f28f5bdae01bee6a": "64391ab7d6870acabf3448b18417b846",
".git/objects/ea/16c1d3a5f7a40e3b76f11a022d4ed4081bc15c": "21ac60e349a152c97dbaec6ca98c2779",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/fa63106b8d021cb0b86856509e3bac383f6068": "120568928f8a9deaf96c431ddbb4367c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/16d6723c30a234bf6b7da72f18e7e33dda261f": "eb52d8e279579c85082cb29d0a2f3c2e",
".git/ORIG_HEAD": "986d81661bd74b01f046b83239f99014",
".git/refs/heads/master": "986d81661bd74b01f046b83239f99014",
".git/refs/remotes/ASUS/master": "986d81661bd74b01f046b83239f99014",
"assets/AssetManifest.bin": "0290b6be3edb2d0ae903c5e550d44462",
"assets/AssetManifest.bin.json": "3e1d0110f7c408e346937037fadd696d",
"assets/AssetManifest.json": "d099176ac7c32f60ad910ee0884d9d84",
"assets/assets/images/about_pic.jpg": "1b487ca869a0bcde9b4449c6e0281729",
"assets/assets/images/bike.png": "5c0056e0e7542dfa187335ba7e938da3",
"assets/assets/images/c.png": "1dcacdf0f51c5a0dfee7909e398c9c86",
"assets/assets/images/css.png": "0313f5cc89e2924223c383f38ded3605",
"assets/assets/images/dart.png": "0a268d67669f6dd4dd3ff982a4e13b54",
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
"index.html": "a4b0480505387a1d0cee7df3ffe6f8a0",
"/": "a4b0480505387a1d0cee7df3ffe6f8a0",
"main.dart.js": "8f77689d3a0eed4668bbdff00ffd7336",
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
