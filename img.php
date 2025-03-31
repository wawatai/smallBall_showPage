<?php
$folder = 'images/';
$images = [];

// 支援的圖片副檔名
$extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

foreach (scandir($folder) as $file) {
    $file_path = $folder . $file;
    $ext = pathinfo($file_path, PATHINFO_EXTENSION);
    if (in_array(strtolower($ext), $extensions)) {
        $images[] = $file_path;
    }
}

header('Content-Type: application/json');
echo json_encode($images);
