<?php

namespace App\Http\Controllers;

use App\Repositories\OrganizationRepository;
use Illuminate\Http\Request;

class OrgainizationController extends Controller
{
    public function save(Request $request) {
        try {
            $organization = OrganizationRepository::save($request->all());
            return $this->response("Organization save successfully.", true, $organization);
        } catch (\Exception $e) {
            return $this->response($e->getMessage(), false);
        }
    }
}
