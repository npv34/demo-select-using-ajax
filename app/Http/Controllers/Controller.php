<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getAllCity()
    {
        $res = Http::get('https://thongtindoanhnghiep.co/api/city');
        return $res->body();
    }

    public function getDistrictByCity($cityId)
    {
        $res = Http::get("https://thongtindoanhnghiep.co/api/city/$cityId/district");
        return $res->body();
    }
}
