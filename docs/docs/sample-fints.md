# Sample code (FinTS)

Check account balance.

```csharp
/// <summary>
/// Kontostand abfragen
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
private async void btn_kontostand_abfragen_Click(object sender, EventArgs e)
{
    var connectionDetails = GetConnectionDetails();
    var client = new FinTsClient(connectionDetails);
    var sync = await client.Synchronization();

    HBCIOutput(sync.Messages);

    if (sync.IsSuccess)
    {
        // TAN-Verfahren
        client.HIRMS = txt_tanverfahren.Text;

        if (!await InitTANMedium(client))
            return;

        var balance = await client.Balance(_tanDialog);

        HBCIOutput(balance.Messages);

        if (balance.IsSuccess)
            SimpleOutput("Kontostand: " + Convert.ToString(balance.Data.Balance));
    }
}
```