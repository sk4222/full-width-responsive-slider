Full Width Responsive SKS_Slider
A simple jquery full width slider

Usage:

Include slider.css or slider.min.css and use the following html structure:
 <div id="sks_slideshow" class="sks_slideshow">               
                <ul>
                    <li>
                        <img src="./images/gta4.jpg" alt=""/>
                        <div class="sks_caption">  
                            <p>Lorem ipsum dolor sit amet</p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>                    

                    </li>
                    <li><img src="./images/gta1.jpg" alt=""/>   <div class="sks_caption">  
                            <p>Lorem ipsum dolor sit amet</p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>   </li>
                    <li><img src="./images/gta2.jpg" alt=""/>  <div class="sks_caption">  
                            <p>Lorem ipsum dolor sit amet</p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>    </li>
                    <li><img src="./images/gta3.jpg" alt=""/>  <div class="sks_caption">  
                            <p>Lorem ipsum dolor sit amet</p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>   </li>
                </ul> 
                <div class="" id="sks_loader"></div>
            </div>
            
            



$(selector).fullWidth({
    maxHeight   :   450, // maximum height of slider, px
    minHeight   :   375, // minimum height of slider, px
    delay       :   5000, // delay between slides, ms
    transition  :   1000, // transition speed, ms
    maxFont     :   36, // maximum font size, px
    minFont     :   24 // minimum font size, px
});
