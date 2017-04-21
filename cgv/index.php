<?php
	$file = 'OlivierRaimbaudCGV-16.07.12.pdf';
	$filename = 'OlivierRaimbaudCGV-16.07.12.pdf';
	header('Content-type: application/pdf');
	header('Content-Disposition: inline; filename="' . $filename . '"');
	header('Content-Transfer-Encoding: binary');
	header('Accept-Ranges: bytes');
	@readfile($file);
?>