<?php
	$file = 'OlivierRaimbaudCGV-02.02.16.pdf';
	$filename = 'OlivierRaimbaudCGV-02.02.16.pdf';
	header('Content-type: application/pdf');
	header('Content-Disposition: inline; filename="' . $filename . '"');
	header('Content-Transfer-Encoding: binary');
	header('Accept-Ranges: bytes');
	@readfile($file);
?>