<?php

namespace App\Http\Controllers;

use App\Services\{Pdf, PdfService};

class PdfController extends Controller
{
    protected $pdf;
    
    public function __construct(Pdf $pdf, PdfService $pdfs) {
        $this->pdf = $pdfs;
        // $this->pdf = $pdf;
    }

    // public function readAndDownload($slug) {
    //     $prefix = "pdf-template";
    //     $array = [
    //         "invoice" => "tax-invoice",
    //         "submission" => "submission",
    //         "submission-letter" => "submission-letter",
    //         "refusal" => "refusal",
    //         "refusal-noti" => "immi-refusal-notification",
    //     ];

    //     if (!isset($array[$slug])) {
    //         abort(404);
    //     }

    //     $view = "{$prefix}.{$array[$slug]}";

    //     $data = [
    //         "receipt_number" => "12345",
    //         "date" => "12/21/2000",
    //         "name" => "bharat",
    //         "bp_number" => "bharat",
    //         "email" => "bharat@yopmail.com",
    //         "total_due" => 1000,
    //         "payment_received" => 1,
    //         "balance_due" => 1,
    //     ];

    //     return $this->pdf->generate($view, $data);
    // }
    public function readAndDownload($slug) {
        $prefix = "pdf-template";
        $array = [
            "invoice" => "tax-invoice",
            "submission" => "submission",
            "submission-letter" => "submission-letter",
            "refusal" => "refusal",
            "refusal-noti" => "immi-refusal-notification",
        ];
        $view = "{$prefix}.{$array[$slug]}";

        $data = [
            "receipt_number" => "12345",
            "date" => "12/21/2000",
            "name" => "bharat",
            "bp_number" => "bharat",
            "email" => "bharat@yopmail.com",
            "total_due" => 1000,
            "payment_received" => 1,
            "balance_due" => 1,
        ];
        
        return response($this->pdf->generate($view, $data), 200)->withHeaders([
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => "{$this->pdf->action()}; filename='invoice.pdf'",
        ]);
    }
}