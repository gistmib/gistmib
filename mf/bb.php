<?php
$json=file_get_contents("https://megafilmeshd50.top/wp-json/dooplay/search/?keyword=kong&nonce=ade4993c21");

$json=json_decode($json,true);


foreach($json as $item){
    
    
    
    echo "
    <a href=''><img src="">
    ".$item['title']."
    
    ";
    
}
?>