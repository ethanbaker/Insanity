//Copyright 2018 Ethan Baker. All rights reserved.
//Email ethandbaker01@gmail.com for additional rights.

let defaultInfo = () => JSON.parse(JSON.stringify({
    deaths: 0,
    levelIndex: 0,
    pType: 'player1',
}))

let info = {
    deaths: 0,
    levelIndex: 0,
    pType: 'player1',
}

const resetInfo = () => info = defaultInfo()

const loadLocalStorage = () => {
    let s = localStorage.getItem('gameInfo')
    info = s ? JSON.parse(s) : resetInfo()
    info.first = false
}

const save = () => {
    localStorage.setItem('gameInfo',JSON.stringify(info))
}

const resetStorage = () => {
    info = {
        deaths: 0,
        levelIndex: 0,
        pType: 'player1'
    }
    save()
    location.reload()
}

let levels = [
    [
        'xxxxxxxxxxxxxxxxxxxxxxx',
        'x!         !          x',
        'x!                 o  x',
        'x!         o          x',
        'x!                    x',
        'x!     o   !    x     x',
        'xxxxxxxxxxxxxxxxx!!!!!x',
        'xxxxxxxxxxxxxxxxxxxxxxx'
    ], 
    [
        'xxxxxxxxxxxxxxxxxxxxxxx',
        'x!     !  o          ox',
        'x!      !       x     x',
        'x!       !           xx',
        'x!        !           x',
        'x!         !!!!xxx   ox',
        'x!                   xx',
        'x!                  x x',
        'x!                    x',
        'x!            x       x',
        'x!                    x',
        'x!  xxx    x          x',    
        'x!!!!!!!!!!!!!!!!!!!!!x',
        'xxxxxxxxxxxxxxxxxxxxxxx'
    ],
    [
        'xxxxxxxxxxxxxxxxxxxxxx',
        'x                    x',
        'x                    x',
        'x          o         x',
        'x                    x',
        'x                    x',
        'x xxx                x',
        'x                    x',
        'x                    x',
        'x                    x',
        'x                    x',
        'x!!!!!!!!!!  !!!!!!!!x',
        'x                    x',
        'x                    x',
        'x   o              o x',
        'xxxxxxxxxxxxxxxxxxxxxx',        
    ],
    [
        'xxxxxxxxxxxxxxxxxxxxxxxx',
        'x!!!!!!!!!! o  !!!!!!!!x',
        'x!!!!!            !!!!!x',
        'x!          xx      !!!x',
        'x!                   !!x',
        'x!     xxx           !!x',
        'x!  xx              !!!x',
        'x!!!!!!!!!!!!   !!!!!!!x',
        'x!!!!!!!!!!!!    !!!!!!x',
        'x!!!!!!!!!!!!!   !!!!!!x',
        'x!!!!!!!!!!!!!   !!!!!!x',
        'x!                    !x',
        'x!                    !x',
        'x!                    !x',
        'x!                    !x',
        'x!    o         o     !x',
        'x!!!!!!!!!!!!!!!!!!!!!xx',
        'xxxxxxxxxxxxxxxxxxxxxxxx'
    ],
    [
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'x                                  !!!!!!!!!x',
        'x                                       !!!!x',
        'x                                x       !!!x',
        'x                   o       x             !!x',
        'x                                  !!!    !!x',
        'x           x                      !!!!   !!x',
        'x                                  !!!!   !!x',
        'x xxx                              !!!!   !!x',
        'x                                  !!!!   !!x',        
        'x                                  !!!!    !x',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    !!x',
        'x                                  !!!    !!x',
        'x                                        !!!x',
        'x                                        !!!x',
        'x                                    x  !!!!x',
        'x                                  !!!!!!!!!x',
        'x                             o    !!!!!!!!!x',
        'x                     x            !!!!!!!!!x',
        'x           o                      !!!!!!!!!x',        
        'x!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    ],
    [
        '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        'x                     o                      x',
        'x                                            x',
        'x             o                              x',
        'x                                            x',
        'x                                            x',
        'xxxxxxxxxx                 o                 x',
        'x                                            x',
        'x                                            x',
        '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    ],
    [
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'xo                                       x',
        'xxxxxxxxxxxxxx o xxxxxxxxxxxxxxxxxxxx    x',
        'x                                       xx',
        'x                                        x',
        'x                                   o    x',
        'x xxxx!!!!  !!   x        xxxxxx         x',
        'x         x                              x',
        'x                                        x',
        'x                                        x',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ],

    [
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'x                                        x',
        'x                                        x',
        'x                                        x',
        'x                                        x',
        'x                                        x',
        'x                                        x',
        'x                                        x',
        'x                                        x',
        'xxxxxxxxxxxxxo                           x',
        'x                                        x',
        'x                                        x',
        'x                                        x',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!          !!!!x',
        'x                                    xxxxx',
        'x                                    xxxxx',
        'x                                    xxxxx',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxx',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!     !!!!!x',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!     !!!!!!x',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!     !!!!!!!x',
        'x!!!!!!!!!    !!!!!!!!!!!!!!!     !!!!!!!!x',
        'x!!!!!!!!o     !!!!!!!!!!!!!     !!!!!!!!!x',
        'x!!!!!!!!       !!!!!!!!!!!     !!!!!!!!!!x',
        'x!!!!!!!!!!!x     !!!!!!!!     !!!!!!!!!!!x',
        'x!!!!!!!!!!!!!!           o   !!!!!!!!!!!!x',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ],
    [
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'x                           !!!!!!!!!!!!!!x',
        'x                            !!!!!!!!!!!!!x',
        'x                             !!!!!!!!!!!!x',
        'x                              !!!!!!!!!!!x',
        'x                               !!!!!!!!!!x',
        'xxxxxxxxx            o           !!!!!!!!!x',
        'x!!!!!!!!                       o!!!!!!!!!x',
        'x!!!!!!!!!!!!!!!!!!!    !!!!!!!!!!!!!!!!!!x',
        'x!!!!!!!!!!!!!!!!!!    !!!!!!!!!!!!!!!!!!!x',
        'x!!!!!!!!               !!!!!!!!!!!!!!!!!!x',
        'x!!!!!!!!               !!!!!!!!!!!!!!!!!!x',
        'x!!!!!!!!         o     !!!!!!!!!!!!!!!!!!x',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x',
        'x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ],
    [
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'x           x                     x         ox',
        'x           x         xx    !!!!!!x          x',
        'x           x  !   x   x     !!!!!x     x    x',
        'x           x          x!     !!!!xx         x',
        'x      xx   x    x     x!!     !!!x          x',
        'xxxxxxxxx   x         !x!!!     !!x   x     xx',
        'x!!!!!!!!  !x      x   x!!!!     !x!         x',
        'x!!!!!!!!  !x       !  x!!!!!     !     x    x',
        'x!!!!!!!   !x  x       x!!!!!!    !         !x',
        'x!!!!!!!   !x          x!!!!!     !x         x',
        'x!!!!!!!  !!x  !    x  x!!!!     !x   x      x',
        'x!!!!!!!  !!x          x!!!     !!x        x!x',
        'x!!!!!!!   !x   x      x!!     !!!x          x',
        'x!!!!!!!   !x   !    x x!     !!!!x  x       x',
        'x!!!!!!!!   x          !     !!!!!x        x x',
        'x!!!!!!!!!  x     x    !     !!!!!x!!      ! x',
        'xo                     x         o     x     x',
        'xxxxxxxxxxxxxxx!!!!!!!!xxxxxxxxxxxxxxx!!!!!!!x',
    ],
    [
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'x           x                     x         ox',
        'x           x           xxxxxx  xxx!!!!!!x   x',
        'x           x          x!!!!!!  !!x          x',
        'x           x          x!!!!!!  !!x      x   x',
        'x      x!   x        x x!!!!!!  !!x          x',
        'xxxxxxxx!   x       x  x!!!!!!  !!x      x!!!x',
        'x!!!!!!!!  !x          x!!!!!   !!x          x',
        'x!!!!!!!!  !x  x       x!!!!!   !!!!!!!!!x   x',
        'x!!!!!!!   !x     !    x!!!!!  !!!!          x',
        'x!!!!!!!   !x      x   x!!!!!  !!!!      x!!!x',
        'x!!!!!!!  !!x          x!!!!!  !!!x          x',
        'x!!!!!!!  !!x         xx!!!!!  !!!x      x   x',
        'x!!!!!!!   !x          x!!!!!  !!!x          x',
        'x!!!!!!!   !x  !      xx!!!!!   !!x!!!!!!x   x',
        'x!!!!!!!!   x          !!!!!!    !x          x',
        'x!!!!!!!!!  x    x     !!!!!!!   !x      x   x',
        'xo                     x         o           x',
        'xxxxxxxxxxxxxxx!!!!!!!!xxxxxxxxxxxxxxx!!!!!!!x', 
    ],
    [
       'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 
       'x        !!!!!!!!  !!!! x                    x', 
       'x        !!!!!     !!   x                    x', 
       'x               o  x                          ', 
       'x               !       x                     ', 
       'x       !       !  x    x                   !!', 
       'xxxxxxxxxxxxxxxxxxxx!!!!xxxxxxxxxxxxxxxxxxxxxx', 
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'x                                             ',
       'xxxxxxxxxxxx                                  ', 
    ],
    [
        '',
        '',
        '',
        '',
        '',
        'ooo',
        'xxxxxxxxxxx',
    ],
    [
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x                                         x',
        'x ooo                                     x',
        'xxxxx                                     x',
    ],
    [
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'x                                        x',
        'x  !!!!!  !   !      !      !   !  !  !  x',
        'x    !    !   !     ! !     !!  !  ! !   x',
        'x    !    !!!!!    !!!!!    ! ! !  !!    x',
        'x    !    !   !   !     !   !  !!  ! !   x',
        'x    !    !   !  !       !  !   !  !  !  x',
        'x                                        x',
        'x       x   x    xxx    x   x     x      x',
        'x        x x    x   x   x   x     x      x',
        'x         x     x   x   x   x     x      x',
        'x         x     x   x   x   x            x',
        'x         x      xxx     xxx      o      x',
        'x                                        x',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ],
]
let levelDone = true

let died = true
let deathCounter = document.querySelector('#deathCounter')

let score = 0
let collected = true

let die;
let collect;

let gameObject = {
    width: 825, //Full screen
    height: 768, 
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { // adds gravity to the game
                y: 300,
                x: 0,
            },
            //debug: true, // adds hit boxes and vectors
        },
    },
    scene: {
        preload() { // preload: function () {}
            alert('To play the game, you must be on PC! You are the green square, trying to collect all of the yellow coins. Don\' touch the lava, as you\'ll die. Use the arrow keys to move and the space bar to jump. Good luck!')
            loadLocalStorage()
            this.load.image('bg', './assets/blue-background.png') // loads the sprites before the game starts to avoid lag
            this.load.image('player1', './assets/green-square.png')
            this.load.image('player2', '/assets/purple-square.png')
            this.load.image('player3', '/assets/pandaSkin.png')
            this.load.image('player4', '/assets/Rainbow.gif')
            this.load.image('wall', './assets/wall.png')
            this.load.image('lava', './assets/lava.png')
            this.load.image('coin', './assets/yellow-square.png')
            this.load.audio('collect', '/assets/audio/Mario-coin-sound.mp3')
            this.load.audio('die', '/assets/audio/beep-03.mp3')
        },

        create() {
            deathCounter.innerText = 'Deaths: ' + info.deaths
            if (info.levelIndex != 0 && info.first) {
                this.player.destroy()
            } 
            info.first = true
            this.add.image(0,0,'bg').setOrigin(0,0) //sets the picture at the origin. Don't set origins for anything else except background images
            this.player = this.physics.add.sprite(100,100,info.pType) // sets this.player equal to the sprite
            this.player.setCollideWorldBounds(true)
            //this.player.setBounce(1)

            this.cursors = this.input.keyboard.createCursorKeys()
            this.walls = this.physics.add.staticGroup();
            this.coins = this.physics.add.staticGroup();
            this.lavas = this.physics.add.staticGroup();

            this.physics.add.collider(this.player, this.walls);
            this.physics.add.overlap(this.player, this.coins, this.takeCoin, null, this)
            this.physics.add.overlap(this.player, this.lavas, this.restart, null, this)

            let collect = this.sound.add('collect')
            let die = this.sound.add('die')

            this.draw()
        },
        update() { // runs per tick (fastest computer can run)
            if (info.levelIndex === 14) {
                info.pType = 'player4'
            }
            if (this.cursors.shift.isDown) {
                if (this.cursors.space.isDown) {
                    info.pType = 'player3' 
                } else {
                    setTimeout(() => {info.pType = 'player2'}, 2000)
                }
            }
            if ((this.cursors.up.isDown || this.cursors.space.isDown) && this.player.body.touching.down === true ) { //&& (this.player.body.touching.right === false && this.player.body.touching.left === false)
                this.player.setVelocityY(-160)
            } else if (this.cursors.left.isDown) { //if the cursor (input) key is down, the player will move left (-x direction)
                this.player.setVelocityX(-160)
            } else if (this.cursors.right.isDown) {
                this.player.setVelocityX(160)
            } else {
                this.player.setVelocityX(0)
            }
            if (score === 3) {
                info.levelIndex += 1
                score = 0
                this.create()
                save()
            }
            collected = true
            died = true
        },
        extend: {
            restart: function (player, coin) {
                save()
                this.sound.play('die')
                player.x = 100
                player.y = 100
                score = 0
                if (died) {
                    died = false
                    info.deaths += 1
                }
                for (let i = 0; i < levels[info.levelIndex].length; i++) {
                    for (let j = 0; j < levels[info.levelIndex][i].length; j++) {
                        if (levels[info.levelIndex][i][j] == 'o') {
                            let coinItem = this.add.sprite(30+16*j, 30+16*i, 'coin');
                            this.coins.add(coinItem);
                        }
                    }
                }
                deathCounter.innerText = 'Deaths: ' + info.deaths
            },
            takeCoin: function (player, coin) {
                this.sound.play('collect')
                coin.destroy()
                if (collected) {
                    score += 1
                    collected = false
                }
            },
            draw() {
                for (let i = 0; i < levels[info.levelIndex].length; i++) {
                    for (let j = 0; j < levels[info.levelIndex][i].length; j++) {
                
                        // Create a wall and add it to the 'walls' group
                        if (levels[info.levelIndex][i][j] == 'x') {
                            let wall = this.add.sprite(30+16*j, 30+16*i, 'wall');
                            this.walls.add(wall);
                            wall.immovable = true; 
                        }
                
                        // Create a coin and add it to the 'coins' group
                        else if (levels[info.levelIndex][i][j] == 'o') {
                            let coinItem = this.add.sprite(30+16*j, 30+16*i, 'coin');
                            this.coins.add(coinItem);
                        }
                
                        // Create a lava space and add it to the 'lavas' group
                        else if (levels[info.levelIndex][i][j] == '!') {
                            let lavaItem = this.add.sprite(30+16*j, 30+16*i, 'lava');
                            this.lavas.add(lavaItem);
                        }
                    }
                }
            } 
        }
    }
}

//for Mrs Houlihan
//let d = new Date()
//if ((d.getDay() !== 0 || d.getDay() !== 6) && (d.getHours() >= 12 && d.getMinutes() >= 52) && (d.getHours() <= 1 && d.getMinutes() <= 32)) {
//    deathCounter.innerText = 'Mrs. Houlihan said no...'
//} else {
//    let game = new Phaser.Game(gameObject)
//}

let game = new Phaser.Game(gameObject)
