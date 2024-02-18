export class DownloadHelper {
	public static downloadFile(blob: Blob, fileName: string): void {
		const linkToDownload = document.createElement('a');

		linkToDownload.download = fileName;
		linkToDownload.href = URL.createObjectURL(blob);

		document.body.appendChild(linkToDownload);

		linkToDownload.click();
		linkToDownload.remove();
	}
}
