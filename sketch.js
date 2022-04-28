kaboom({
  scale: 2,
  background: [10,150,200],
})
loadSpriteAtlas("https://kaboomjs.com/sprites/dungeon.png", "atlas.json");
  let hp=3
  let levelNum = 1
  let key=false
  let score = 0
 
   
const levelConfig = {
  width: 16,
  height: 16,
  pos: vec2(0,0),
  "w": () => [
    "wall",
    sprite("wall"),
    area(),
    solid()
  ],
  "b": () => [
    "background",
    sprite("wall"),
    area(),
    opacity(0.25)
  ],
  "l": () => [
    //the l stands for lies I couldn't think of anything better
    "background",
    "fakewall",
    sprite("wall"),
    area(),
  ],
  "o": () => [
    "ogre",
    sprite("ogre",{
    "anim":"run"
    }),
    area({scale:0.6}),
    origin("center"),
    vx=50
  ],
  "v": () => [
    "bounce",
    rect(1,16),
    area(1),
    //solid(),
    origin("left"),
    opacity(0)
  ],
  "V": () => [
    "bounce",
    rect(1,16),
    area(1),
    origin("right"),
    opacity(0)
  ],
   "t": () => [
    "top",
    rect(16,1),
    area(1),
    solid(),
    origin("top"),
    opacity(0)
  ],
  "c": () => [
    "chest",
    sprite("chest"),
    area(1),
    origin("top"),
  ],
  "h": () => [
    "healthPotion",
    sprite("healthPotion"),
    area(1),
    origin("top"),
  ],
  "f": () => [
    "floor",
    sprite("floor"),
    area(),
    solid()
  ],
  "d": () => [
    "door",
    sprite("closed_door"),
    area(),
    origin("left")
  ],
  "$": () => [
    "coin",
    sprite("coin"),
    area(),
    origin("top")
  ]
}

const levels = [ 
  [
  "wtttttttttttttttttttttttttw",
  "w                         w",
  "w                         w",
  "w c               wffff   w",
  "wff    fffffffffffw      fw",
  "wwwf              w     fww",
  "wwwwf             wd   fwww",
  "wwwwwf            wffffwwww", 
  "wwwwwwf           w       w",
  "wwwwwwwf          w       w",
  "wwwwwwwwf         w       w",
  "wwwwwwwwwf                w",
  "wwwwwwwwwwf  $            w",
  "wwwwwwwwwwwfffffffff      w",
  "w                 wwf     w",
  "w                 wwwff   w",
  "w                jwwwww   w",
  "w         ffffffffw      fw",
  "w                       fww",
  "w                      fwww",
  "wV o    h        v    fwwww",
  "ffffffffffffffffffffffwwwww"
  ],
  [
  "wtttttttttttttttttwtttttttw",
  "w                 wd      w",
  "w   ffffff        wfff    w",
  "w      wwwf       w       w",
  "wf     wwwwf      w     ffw",
  "wfff   wwwwwf     w    fffw",
  "w      wwwwwwfffffw       w",
  "w    cfwwwwwwwwwwwwff     w", 
  "w  ffffwwwwllllllll       w",
  "w      wwwlllllllll    fffw",
  "wf     w  lwwwwwwww       w",
  "wfff   w $wwwwwwwwwff     w",
  "w      wwwwwwwwwwww       w",
  "w     fwwwwwwwwwwww    fffw",
  "w  ffffwwwwwwwwwwwwff     w",
  "w                         w",
  "w                      fffw",
  "w             fffffffffwwww",
  "w            fwwwwwwwwwwwww",
  "w           fwwwwwwwwwwwwww",
  "wv o      Vfwwwwwwwwwwwwwww",
  "fffffffffffwwwwwwwwwwwwwwww"
  ],
  
  [
  "wtttttttttttttttttttttttttw",
  "w                         w",
  "w                         w",
  "w                         w",
  "w                         w",
  "w                         w",
  "wd                        w", 
  "wffffffff                 w",
  "w       wf                w",
  "w       wwf               w",
  "w       wwwf              w",
  "w       wwwwff            w",
  "w            wf           w",
  "w            wwf          w",
  "w          h wwwf         w",
  "w   ffffffffffffwfffffff  w",
  "w               w         w",
  "wf             cw        fw",
  "wwf   ffffffffffw       fww",
  "wwwf                   fwww",
  "wwwwf  V o   $     v  fwwww",
  "wwwwwfffffffffffffffffwwwww"
  ]
]

scene("start", () => {
add([
text("dragon World", {
  size:25,
  }),
    origin("center"),
    pos(width()-width()/2,75)
])
  add([
    "startButton",
text("start", {
  size:25,
  }),
    origin("center"),
    pos(width()-width()/2,150),
    area()
])
  add([
    "Continue",
text("Continue saved game", {
  size:25,
  }),
    origin("center"),
    pos(width()-width()/2,250),
    area()
])
  onClick("Continue", () => {
    levelNum = localStorage.getItem("level")
    hp = localStorage.getItem("hp")
    score = localStorage.getItem("score")
      key=false
     if(levelNum == 1){
      go("l1")
    }
    if(levelNum == 2){
      go("l2")
    }
    if(levelNum ==3){
      go("l3")
    }
          })
  onClick("startButton", () => {
      key=false 
      go("l1")
      localStorage.setItem("score",score)
      localStorage.setItem("hp",hp)
          })
})
scene("l1",() => {
  const level = addLevel(levels[0],levelConfig)
  player(284,272)
ogreMove()

  
  
})
scene("l2",() => {
  const level = addLevel(levels[1],levelConfig)


  player(250,96)
ogreMove()
  
  
})
scene("l3",() => {
  const level = addLevel(levels[2],levelConfig)

  player(150,225)
ogreMove()
  
  
})// close game scene
scene("loser", () => {
add([
text("you lose", {
  size:25,
  }),
    origin("center"),
    pos(width()-width()/2,75)
])
  add([
    "retry",
text("retry", {
  size:25,
  }),
    origin("center"),
    pos(width()-width()/2,150),
    area()
])
  onClick("retry", () => {
      key=false
    hp=3    
      go("l1")
          })
          })
scene("finish", () => {
add([
text("level complete", {
  size:25,
  }),
    origin("center"),
    pos(width()-width()/2,75)
])
  add([
    "next level",
text("next level", {
  size:25,
  }),
    origin("center"),
    pos(width()-width()/2,150),
    area()
])
   onClick("next level", () => {
      key=false 
     key=false 
    if(levelNum == 2){
      go("l2")
    }
    if(levelNum ==3){
      go("l3")
    }
          })
          })

function ogreMove(){
let vx=50
onUpdate("ogre", (o)=> {
  o.move(vx,0)
  if (vx == 50){
  o.flipX(false)
  }
  if (vx == -50){
  o.flipX(true)
  }
})
  onCollide("ogre","bounce",(o) => {
  vx=-vx
  o.move(vx,0)
  })
}
function hpdisplay() {
  hpText= add ([
  "hpText",
     pos(0,352),
  text("health:"+(hp),{
  size:20
  })
  ]) }
function scoredisplay() {
  scoretext= add ([
  "scoreText",
     pos(150,352),
  text("score:"+(score),{
  size:20
  })
  ]) }
function player(x,y){
   const player = add([
     "player",
      sprite("hero"),
      pos(x,y),
      area({scale:0.5}),
      origin("bot"),
      body(),
    {
    "speed":100,
    "jumpSpeed" : 350
    }
  ]);
  player.play("idle")
   hpdisplay()
  scoredisplay()
  onKeyPress("space",()=>{
    if (player.isGrounded()){
    player.jump(player.jumpSpeed) 
    player.play("hit")
    } 
    player.onCollide("floor", () => {
  player.play("idle")
  })
  })
  
  onKeyDown("right", ()=> {
    player.move(player.speed,0)
    player.flipX(false)
  })
  onKeyDown("left", ()=> {
    player.move(-player.speed,0)
    player.flipX(true)
  })
  onKeyPress(["left","right"], ()=> {
    player.play("run")
  })
  onKeyRelease(["left","right"], ()=> {
    player.play("idle")
  })
  player.onCollide("chest",(c) => {
     c.play("open")
    key=true
    }) 
   player.onCollide("healthPotion",(h) => {
     destroy(h)
     hp++
    destroyAll("hpText")
    hpdisplay()

   }) 
  player.onCollide("coin",(c) => {
     destroy(c)
     score++
    destroyAll("scoreText")
scoredisplay()
   }) 
  player.onCollide("ogre",() => {
    hp--
    destroyAll("hpText")
    hpdisplay()
    if(hp == 0) {
      wait(1,()=>{
      go("loser")
    })
    }
    })
  
  player.onCollide("door",(d) => {
    if(key == false) {
        add([
        "locktext",
        text("locked", {
        size:16
    }),
        pos(d.pos),
        color(225,0,0),
         ])
    wait(10,()=>{
      destroyAll("locktext")
      })
    }
    wait(10,()=>{
      destroyAll("locktext")
      })
     if(key == true) {
       levelNum ++
       d.play("open")
      wait(1,()=>{
        localStorage.setItem("level",levelNum)
        localStorage.setItem("score",score)
        localStorage.setItem("health",hp)
      go("finish")
        })
      }
    }) //end collide
}
//end player function
go("start")