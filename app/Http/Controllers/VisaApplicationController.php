<?php

namespace App\Http\Controllers;

use App\Repositories\VisaApplicationRepository;
use Illuminate\Http\Request;

class VisaApplicationController extends Controller
{

    public function list(Request $request) {
        try {
            $list = VisaApplicationRepository::list($request->all());
            return $this->response("List fetched successfully.", true, $list);
        } catch (\Exception $e) {
            return $this->response($e->getMessage(), false);
        }
    }
    public function save(Request $request) {
        try {
            $visaApplication = VisaApplicationRepository::save($request);
            return $this->response("Visa application save successfully.", true, $visaApplication);
        } catch (\Exception $e) {
            return $this->response($e->getMessage(), false);
        }
    }

    public function delete(Request $request) {
        try {
            $visaApplication = VisaApplicationRepository::delete($request);
            return $this->response("Visa application save successfully.", true, $visaApplication);
        } catch (\Exception $e) {
            return $this->response($e->getMessage(), false);
        }
    }
}
