<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class SocketController extends Controller
{
    public static function pingSocketIO($ids) {
        $payload = json_encode($ids);
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => TRUE,
            CURLOPT_URL => 'http://localhost:8890/ping',
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json'
            ),
            CURLOPT_POSTFIELDS => $payload
        ));
        $resp = curl_exec($curl);
        curl_close($curl);
    }
}
