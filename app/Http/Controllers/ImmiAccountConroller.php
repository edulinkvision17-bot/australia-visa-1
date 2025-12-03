<?php

namespace App\Http\Controllers;

use App\Http\Repositories\ImmiAccountRepository;
use Illuminate\Http\Request;

class ImmiAccountConroller extends Controller
{
    public function list(Request $request) {
        return $this->response("Create page loaded successfully", true, [], 'ClientLanding/index');
    }

    public function create(Request $request) {
        return $this->response("Create page loaded successfully", true, [], 'CreateIndividualAccount/index');
    }

    public function work(Request $request) {
        return $this->response("Create Work Visa page loaded successfully", true, [], 'WorkApplication/index');
    }

    public function visitor(Request $request) {
        return $this->response("Create Visitor Visa page loaded successfully", true, [], 'VisitorApplication/index');
    }

    public function detail(Request $request) {
        return $this->response("Detail page loaded successfully", true, [], 'ClientLanding/Detail/index');
    }

    public function viewReciept(Request $request) {
        return $this->response("View Reciept page loaded successfully", true, [], 'ClientLanding/Detail/ApplicationHome/ViewReciept/index');
    }

    public function save(Request $request, ImmiAccountRepository $immiAccRep) {
        try {
            $data = $immiAccRep->create($request->all());
            return $this->response("User saved successfully.", true, $data);
        } catch (\Exception $e) {
            return $this->response($e->getMessage(), false);
        }
    }
}
