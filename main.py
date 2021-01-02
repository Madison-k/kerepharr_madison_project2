while True:
    print('light level:' + input.light_level())
    if input.light_level() < 100:
        light.set_pixel_color(0, light.rgb(250, 0, 0))
        light.set_pixel_color(1, light.rgb(0, 0, 250))
        light.set_pixel_color(2, light.rgb(0, 250, 0))
        light.set_pixel_color(3, light.rgb(250, 250, 0))
        light.set_pixel_color(4, light.rgb(250, 0, 250))
        light.set_pixel_color(5, light.rgb(0, 250, 250))
        light.set_pixel_color(6, light.rgb(50, 150, 255))
        light.set_pixel_color(7, light.rgb(200, 100, 250))
        light.set_pixel_color(8, light.rgb(250, 50, 250))
        light.set_pixel_color(9, light.rgb(255, 100, 50))
        light.set_brightness(100)
        pause(2000)
        light.clear()
        pause(2000)
    elif input.light_level() > 250:
        light.set_all(light.rgb(0, 0, 0))
    else:
        light.clear()
