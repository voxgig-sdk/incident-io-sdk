// IncidentIo SDK exists test.

import XCTest

@testable import IncidentIoSdk

final class ExistsTest: XCTestCase {
  func testMode() {
    let testsdk = IncidentIoSDK.testSDK(nil, nil)
    XCTAssertEqual(testsdk.mode, "test")
  }
}
