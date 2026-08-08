// IncidentIo SDK exists test.

using Xunit;

using IncidentIoSdk;

namespace IncidentIoSdk.Test;

public class ExistsTest
{
    [Fact]
    public void TestMode()
    {
        var testsdk = IncidentIoSDK.TestSDK(null, null);
        Assert.NotNull(testsdk);
    }
}
