<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Request $request) {
        return Inertia::render('Dashboard');
    }

    public function login(Request $request) {
        return Inertia::render('Admin/Login/index');
    }
    public function userDetail(Request $request) {
        return Inertia::render('Admin/UserDetail/index');
    }
}
