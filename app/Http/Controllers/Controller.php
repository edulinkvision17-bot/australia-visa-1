<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function response(
        string $message = "Operation successful",
        bool $status = true,
        $data = [],
        ?string $view = null
    ) {
        // JSON response
        if (request()->wantsJson()) {
            return response()->json([
                "message" => $message,
                "status"  => $status,
                "data"    => $data,
            ])->setStatusCode($status ? 200 : 422);
        }

        // Redirect response for POST, PUT, DELETE
        if (request()->isMethod('post') || request()->isMethod('put') || request()->isMethod('delete')) {
            if (!$status) {
                return Redirect::back()->withErrors($message);
            }

            return Redirect::back()->with([
                "status"  => $status,
                "message" => $message,
                "data"    => $data,
            ]);
        }

        // Inertia response (for GET)
        if (!$status) {
            return Redirect::back()->withErrors($message);
        }

        return Inertia::render($view, $data);
    }
}
