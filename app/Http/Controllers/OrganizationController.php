<?php

namespace App\Http\Controllers;

use App\Repositories\OrganizationRepository;
use Illuminate\Http\Request;

class OrganizationController extends Controller {

    public function list() {
        return $this->response("Create page loaded successfully", true, [], 'Admin/Organization/List');
    }

    public function getList(Request $request) {
        try {
            $list = OrganizationRepository::list($request->all());
            return $this->response("Organization fetched successfully.", true, $list);
        } catch (\Exception $e) {
            return $this->response($e->getMessage(), false);
        }
    }
}
