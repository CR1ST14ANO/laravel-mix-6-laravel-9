<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
    $teste = ['Cristiano', 
        'Fabio'
    ];
    return Inertia::render('Home');
    }

}
