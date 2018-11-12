import React, { Component } from 'react';

class View extends Component {
  render() {
    const { backend } = this.props;

    return (
      <tbody>
        <tr>
          <td>Enable TLS</td><td>{backend.use_ssl ? 'Yes' : 'No' }</td>
        </tr>
        <tr>
          <td>Verify Cert</td><td>{backend.ssl_check_cert ? 'Yes' : 'No' }</td>
        </tr>
        <tr>
          <td>Certificate Hostname</td><td>{backend.ssl_cert_hostname}</td>
        </tr>
        <tr>
          <td>SNI Hostname</td><td>{backend.ssl_sni_hostname}</td>
        </tr>
        <tr>
          <td>TLS CA Certificate</td><td>{backend.ssl_ca_cert}</td>
        </tr>
        <tr>
          <td>Minimum TLS version</td><td>{backend.min_tls_version}</td>
        </tr>
        <tr>
          <td>Maximum TLS version</td><td>{backend.max_tls_version}</td>
        </tr>
        <tr>
          <td>Ciphersuites</td><td>{backend.ssl_ciphers}</td>
        </tr>
        <tr>
          <td>TLS client certificate</td><td>{backend.ssl_client_cert}</td>
        </tr>
        <tr>
          <td>TLS client key</td><td>{backend.ssl_client_key}</td>
        </tr>
        <tr>
          <td>Shielding</td><td>{backend.shield}</td>
        </tr>
        <tr>
          <td>Health check</td><td>{backend.healthcheck}</td>
        </tr>
        <tr>
          <td>Auto load balance</td><td>{backend.auto_loadbalance ? 'Yes' : 'No'}</td>
        </tr>
        <tr>
          <td>Weight</td><td>{backend.weight}</td>
        </tr>
        <tr>
          <td>Maximum connections</td><td>{backend.max_conn}</td>
        </tr>
        <tr>
          <td>Error threshold</td><td>{backend.error_threshold}</td>
        </tr>
        <tr>
          <td>Connectsion (ms)</td><td>{backend.connect_timeout}</td>
        </tr>
        <tr>
          <td>First byte (ms)</td><td>{backend.first_byte_timeout}</td>
        </tr>
        <tr>
          <td>Between bytes (ms)</td><td>{backend.between_bytes_timeout}</td>
        </tr>
      </tbody>
    );
  }
}

export default View;
