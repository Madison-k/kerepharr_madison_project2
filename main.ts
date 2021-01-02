while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() < 100) {
        light.setPixelColor(0, light.rgb(250, 0, 0))
        light.setPixelColor(1, light.rgb(0, 0, 250))
        light.setPixelColor(2, light.rgb(0, 250, 0))
        light.setPixelColor(3, light.rgb(250, 250, 0))
        light.setPixelColor(4, light.rgb(250, 0, 250))
        light.setPixelColor(5, light.rgb(0, 250, 250))
        light.setPixelColor(6, light.rgb(50, 150, 255))
        light.setPixelColor(7, light.rgb(200, 100, 250))
        light.setPixelColor(8, light.rgb(250, 50, 250))
        light.setPixelColor(9, light.rgb(255, 100, 50))
        light.setBrightness(100)
        pause(2000)
        light.clear()
        pause(2000)
    } else if (input.lightLevel() > 250) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.clear()
    }
    
}
