<?php

namespace App\Services;

use Mpdf\Mpdf;
use Illuminate\Support\Facades\View;

class PdfService
{
    public function action()
    {
        return request()->has('download') ? 'D' : 'I'; // D=download, I=inline
    }

    public function generate($view, $data = [])
    {
        ini_set('pcre.backtrack_limit', '5000000');
        ini_set('pcre.recursion_limit', '5000000');
        $html = View::make($view, $data)->render();

        // $mpdf = new Mpdf([
        //     'tempDir' => storage_path('app/mpdf/temp'),
        //     'default_font' => 'dejavusans',
        // ]);

        $mpdf = new \Mpdf\Mpdf([
            'tempDir' => storage_path('app/mpdf-temp'),
            'curlAllowUnsafeSslRequests' => true, // avoid handshake delays
            'allow_output_buffering' => true,
            'autoScriptToLang' => true,
            'autoLangToFont' => true,
        ]);


        // important for image loading
        $mpdf->showImageErrors = true;

        $mpdf->WriteHTML($html);

        return $mpdf->Output('document.pdf', $this->action());
    }
}
