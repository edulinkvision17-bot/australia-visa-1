<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response {
        return Inertia::render('Auth/UserLogin', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse {
        $request->authenticate();

        $request->session()->regenerate();
        $user = Auth::user();
        if ($user->role === "organization") {
            return redirect()->route('immi.list');
        }
        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function mainLogin(LoginRequest $request) {
        if ($request->email === 'admin@yopmail.com' && $request->password === 'password') {
            session(['main_login_done' => true]);
            return redirect('/login');
        }
        return back()->with('error', 'Invalid first login details');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        session()->flush();
        
        return redirect('/');
    }
}
