var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/chiamingyen/cmsimfly 內容管理: https://chiamingyen.github.io/cmsimfly/ 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://chiamingyen.github.io/cmsimfly/blog","tags":"misc","url":"https://a40823112.github.io/wcm2020/blog/pages/about/"},{"title":"2020 WCM課程筆記整理","text":"MBR與GPT MBR: Master Boot Record 主開機記錄 [啟動系統:BIOS] 只適用於最大容量2TB的硬碟，如果使用容量更大的硬碟，則無法識別，同時MBR也只支援最大4個主分割區。 現今的社會都是大容量的硬碟，所以使用MBR會被侷限。 GPT: GUID Partition Table (俗稱:GUID磁碟分割表格) [啟動系統:UEIF] GPT逐漸取代掉MBR，GPT使用了更現代的技術取代老舊的MBR磁碟分割表格。 GPT的推出與 UEFI 是相輔相成的，想要使用GPT就必須是UEFI的環境。 優勢: 1.突破了MBR最大只支援2T硬碟的限制 2.允許無限數量的分割區不必創建擴展分區即可使其工作 在MBR的磁碟上，分割區和引導資料都存儲在同一個地方。如果資料被覆蓋或損壞，就無法電將腦啟動。 相較之下，GPT磁碟上會儲存多個副本，使其更加穩定、安全，並且可以在資料損壞下進行修復。 BIOS與UEFI BIOS : Basic Input Output System 基本輸入輸出系統 BIOS是位於電腦主機板上的晶片中的低級軟體。電腦啟動時， BIOS會喚醒電腦的硬體元件，確保它們正常運行。近幾年BIOS就沒有太大的技術改革，而且一直局限於2TB的磁碟，而且啟動時僅有的1MB執行空間，導致啟動時間被拉長。 UEFI : Unified Extensible Firmware Interface 統一可延伸韌體介面 [UEFI就像進階版的BIOS，但不能稱它為BIOS] UEFI是一種新的主機板引導項，它不同於傳統BIOS的開機流程，這種介面可以讓作業系統自動從預啟動的操作環境中載入，加快作業系統的速度。 UEFI帶來的最大改變就是圖形化、可滑鼠操作的介面 優勢: 1. 有更強的安全性 2. 啟動速度更快 3. 支援容量更大 何謂 API 應用程式介面 (Application Programming Interface): 為用於打造應用程式軟體的一組副程式定義、協定與工具。一般而言，API 是指各種軟體組件之間一套明確定義的溝通方法。簡單來說，其就像是讓你用的一個函式庫，呼叫你想要使用的函式，並給予相對應的參數，函式便回傳給你結果。 WebAPI 在 Web Application 的開發情境下的 API 被稱為 Web API，在 Web API 作用時，客戶端和伺服器端會透過 HTTP 通訊協定來進行請求與回應。使用 Web API 的一方是客戶端，可能是瀏覽器、手機或者穿戴式設備等等，客戶端會向伺服器端發出請求，要求執行某個 CRUD 動作。 何謂 URI 統一資源識別碼 (Uniform Resource Identifier) : 是可供您的應用程式在內部網路或網際網路上使用之資源的精簡標記法。 URI 類別會定義用來處理 URI 的屬性和方法，包括剖析、比較和合併。 URI 又可細分為 : URL: 統一資源定位符 (Uniform Resource Locator) URN: 統一資源名稱 (Uniform Resource Name) 何謂 URL 、 URN URL 統一資源定位符 (Uniform Resource Locator) ;又名網域名稱 URL為URI的子集，其為網際網路上標準的資源的位址。 URN 統一資源名稱 (Uniform Resource Name) URN並非如URL一般是用於指示資源的位址，而是用來鑑別實體的唯一性，也就是以名稱當作識別的依據。","tags":"Misc","url":"https://a40823112.github.io/wcm2020/blog/2020-Fall-32-bit-Windows.html"}]};