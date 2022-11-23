function slider_switcher() {
    if (window.innerWidth > 600) {
    
    timer2 = setInterval(() => {

        document.querySelector(".offers_room_container_imgs_food").scrollLeft +=($(".offers_room_container_imgs_food").width() * 1)
    }, 3000);

        
   
    timer = setInterval(() => {
        document.querySelector(".offers_room_container_imgs_food").scrollLeft -=(99999)

    }, 12001);
   
}}


function slider_switcher_mobile() {
    if (window.innerWidth < 600) {
    
    timer2 = setInterval(() => {

        document.querySelector(".offers_room_container_imgs_food").scrollLeft +=($(".offers_room_container_imgs_food").width() * 1)
    }, 1500);

        
   
    timer = setInterval(() => {
        document.querySelector(".offers_room_container_imgs_food").scrollLeft -=(99999)

    }, 12001);
   
}}

window.addEventListener("load", slider_switcher)


window.addEventListener("load", slider_switcher_mobile)







// checking if element is visible on screen text1



function check_element_visible_on_screen_book() {
    const anchor_book_text = document.querySelector(".anchor_book_text")
    const top_text_book = document.getElementById("book_p_text")
  
    const rect = anchor_book_text.getBoundingClientRect();
    if (
       
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    )
    {   
        top_text_book.style.visibility="visible"
        top_text_book.style.animation="fadeIn_extra 0.7s forwards"
        
        
        
           
        
    }

}
document.addEventListener("scroll", check_element_visible_on_screen_book)




function check_element_visible_on_screen_food() {
    const anchor_food_text = document.querySelector(".anchor_food_text")
    const top_text_food = document.getElementById("food_text_p")
  
    const rect = anchor_food_text.getBoundingClientRect();
    if (
       
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    )
    {   
        top_text_food.style.visibility="visible"
        top_text_food.style.animation="fadeIn_extra 0.7s forwards"
        
        
        
           
        
    }

}
document.addEventListener("scroll", check_element_visible_on_screen_food)


function check_element_visible_on_screen_staff() {
  
    const anchor_staff_text = document.querySelector(".staff_text_anchor")
    const top_text_staff = document.querySelector(".staff_text1")

    const rect = anchor_staff_text.getBoundingClientRect();
    if (
       
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    )
    {   
        top_text_staff.style.visibility="visible"
        top_text_staff.style.animation="fadeIn_extra 0.7s forwards"
        
        
        
           
        
    }

}
document.addEventListener("scroll", check_element_visible_on_screen_staff)

function check_element_visible_on_screen_rooms() {
    const anchor_rooms_text = document.querySelector(".anchor_text_rooms")
    const top_text_rooms = document.getElementById("rooms_text")
    
    const rect = anchor_rooms_text.getBoundingClientRect();
    if (
       
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    )
    {   
        top_text_rooms.style.visibility="visible"
        top_text_rooms.style.animation="fadeIn_extra 0.7s forwards"
        
        
        
           
        
    }

}
document.addEventListener("scroll", check_element_visible_on_screen_rooms)
function show_mobile_menu(){
    $(".mobile_nav_content").css("animation", "mobile_nav_animation 0.5s forwards")
    $(".mobile_nav_content").css("display", "flex")
    $(".background_mobile").css("display", "block")
    $("body").css("overflow-y", "hidden")
    $("html").css("overflow-y", "hidden")

}

function hide_mobile_menu(){
    $(".mobile_nav_content").css("animation", "mobile_nav_animation2 0.5s forwards")
    setTimeout(() => {
        $(".mobile_nav_content").css("display", "none")
        $(".background_mobile").css("display", "none")
        $("body").css("overflow-y", "scroll")
        $("html").css("overflow-y", "scroll")
    }, 501);
 


}



document.querySelector(".mobile_icon22").addEventListener("click", hide_mobile_menu)
document.querySelector(".hamb_icon").addEventListener("click", show_mobile_menu)

const hide_nav_wide = () => {
    if($('#nav').css('display') == 'flex') {
        
        $(".navigation_container").css("animation", "hide_nav_wide 1s forwards")
        $(".hamb_wide_screen_icon").css("animation", "rotate_hamb 1s forwards")
        setTimeout(() => {
            $(".navigation_container").css("display", "none")
            $("#nav").css("display", "none")
            
        }, 1001);
    }
    else {
        show_nav_wide()

    }

}

document.querySelector(".hamb_wide_screen_icon").addEventListener("click", hide_nav_wide )



const show_nav_wide = () => {
    $(".navigation_container").css("animation", "show_nav_wide 0.5s forwards")
    $(".hamb_wide_screen_icon").css("animation", "rotate_hamb_back 0.5s forwards")
    setTimeout(() => {
        $("#nav").css("display", "flex")
        $(".navigation_container").css("display", "block")
        
    }, 501);
   

}





function show_deserts_menu() {
    $(".salads_dishes_cols").css("display", "none")
    $(".drinks_dishes_cols").css("display", "none")
    $(".starters_dishes_cols").css("display", "none")
    $(".main_dishes_cols").css("display", "none")

    $(".deserts_dishes_cols").css("display", "block")

    $("#food1").addClass("food_kind")
    $("#food3").addClass("food_kind")
    $("#food4").addClass("food_kind")
    $("#food5").addClass("food_kind")


    $("#food2").removeClass("food_kind")
    $("#food2").addClass("food_kind_active")
    
   


}



document.querySelector("#food2").addEventListener("click", show_deserts_menu)


function show_mains_menu() {
    $(".salads_dishes_cols").css("display", "none")
    $(".drinks_dishes_cols").css("display", "none")
    $(".starters_dishes_cols").css("display", "none")
    $(".deserts_dishes_cols").css("display", "none")

    $(".main_dishes_cols").css("display", "block")

    $("#food1").addClass("food_kind")
    $("#food2").addClass("food_kind")
    $("#food3").addClass("food_kind")
    $("#food4").addClass("food_kind")
    $("#food5").addClass("food_kind")

    $("#food1").removeClass("food_kind")
    $("#food1").addClass("food_kind_active")




}



document.querySelector("#food1").addEventListener("click", show_mains_menu)


function show_starters_menu() {
    $(".salads_dishes_cols").css("display", "none")
    $(".drinks_dishes_cols").css("display", "none")
    $(".main_dishes_cols").css("display", "none")
    $(".deserts_dishes_cols").css("display", "none")

    $(".starters_dishes_cols").css("display", "block")

    $("#food1").addClass("food_kind")
    $("#food2").addClass("food_kind")
    $("#food3").addClass("food_kind")
    $("#food4").addClass("food_kind")
    $("#food5").addClass("food_kind")

    $("#food3").removeClass("food_kind")
    $("#food3").addClass("food_kind_active")




}



document.querySelector("#food3").addEventListener("click", show_starters_menu)

function show_salads_menu() {

    $(".drinks_dishes_cols").css("display", "none")
    $(".starters_dishes_cols").css("display", "none")
    $(".main_dishes_cols").css("display", "none")
    $(".deserts_dishes_cols").css("display", "none")

    $(".salads_dishes_cols").css("display", "block")

    $("#food1").addClass("food_kind")
    $("#food2").addClass("food_kind")
    $("#food3").addClass("food_kind")
    $("#food4").addClass("food_kind")
    $("#food5").addClass("food_kind")

    $("#food4").removeClass("food_kind")
    $("#food4").addClass("food_kind_active")




}



document.querySelector("#food4").addEventListener("click", show_salads_menu)

function show_drinks_menu() {
    $(".salads_dishes_cols").css("display", "none")
    $(".starters_dishes_cols").css("display", "none")
    $(".main_dishes_cols").css("display", "none")
    $(".deserts_dishes_cols").css("display", "none")

    $(".drinks_dishes_cols").css("display", "block")

    $("#food1").addClass("food_kind")
    $("#food2").addClass("food_kind")
    $("#food3").addClass("food_kind")
    $("#food4").addClass("food_kind")
    $("#food5").addClass("food_kind")

    $("#food5").removeClass("food_kind")
    $("#food5").addClass("food_kind_active")




}



document.querySelector("#food5").addEventListener("click", show_drinks_menu)


