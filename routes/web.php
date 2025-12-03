<?php

use App\Http\Controllers\{DashboardController, ImmiAccountConroller, OrgainizationController, OrganizationController, PdfController, ProfileController, VisaApplicationController, AdminController};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (session('main_login_done')) {
        return redirect('login');
    }
    return Inertia::render('OuterLogin/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::get('/login', [AdminController::class, 'login'])->name('login');
    Route::get('/user-detail', [AdminController::class, 'userDetail'])->name('userDetail');
});

// Route::get('/admin', function () {
//     Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
// })->name('dashboard');

Route::middleware(['main.login', 'auth', 'role:admin'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::name('organization.')->prefix('organization')->group(function () {
        Route::get('/', [OrganizationController::class, 'list'])->name('list');
        Route::get('/list', [OrganizationController::class, 'getList'])->name('get.list');
    });
});

Route::middleware(['main.login', 'auth', 'role:organization,admin'])->group(function () {
    # organization routes
    Route::prefix("immi")->name('immi.')->group(function () {
        Route::get('/list', [ImmiAccountConroller::class, 'list'])->name('list');
        Route::get('/create', [ImmiAccountConroller::class, 'create'])->name('create');
        Route::get('/create/work', [ImmiAccountConroller::class, 'work'])->name('work');
        Route::get('/create/visitor', [ImmiAccountConroller::class, 'visitor'])->name('visitor');
        Route::get('/detail', [ImmiAccountConroller::class, 'detail'])->name('detail');
        Route::get('/detail/view-reciept', [ImmiAccountConroller::class, 'viewReciept'])->name('viewReciept');
        Route::post('/save', [ImmiAccountConroller::class, 'save'])->name('save');
    });

    Route::name('visa.application.')->group(function () {
        Route::post('/list', [VisaApplicationController::class, 'list'])->name('list');
        Route::post('/save', [VisaApplicationController::class, 'save'])->name('save');
        Route::post('/delete', [VisaApplicationController::class, 'delete'])->name('delete');
    });
});

Route::middleware(['auth', 'role:client'])->group(function () {
    # client routes
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('pdf/{slug}', [PdfController::class, 'readAndDownload']);

Route::prefix("orgainization")->name("orgainization.")->group(function () {
    Route::post('/register', [OrgainizationController::class, 'save'])->name("save");
});

require __DIR__.'/auth.php';
