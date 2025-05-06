<?php
// index.php
header("Content-Type: application/json");

// Inoltra richiesta a Notion
$url = 'https://api.notion.com/v1/databases/1a4d83a736578092b23df8fb2199b419/query';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["page_size" => 1]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer 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',
    'Notion-Version: 2022-06-28',
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
