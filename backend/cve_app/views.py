import requests
from collections import Counter
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
import re

API_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0"


def extract_topics(description):
    keywords = []
    common_terms = ["Linux", "Windows", "MacOS", "Apache", "Sendmail", "SSH",
                    "Kernel", "Buffer Overflow", "XSS", "SQL Injection", "RCE",
                    "Privilege Escalation", "Cross-Site Request Forgery",
                    "DoS", "DDoS", "Denial of Service", "Command Injection",
                    "Directory Traversal", "Heap Overflow",
                    "Stack Overflow", "LDAP Injection",
                    "XML Injection", "CRLF Injection",
                    "Path Traversal", "Insecure Deserialization",
                    "CSRF", "CORS", "Clickjacking", "DNS Spoofing",
                    "Man-in-the-Middle", "Click Fraud", "OAuth",
                    "Authentication Bypass", "Authorization Bypass",
                    "CVE", "Shellshock", "Heartbleed", "Shell Injection",
                    "Cross-Site Scripting", "Code Injection", "Sudo",
                    "Sudo Caching", "Brute Force", "SSL/TLS", "SMB",
                    "SSL Stripping", "Cryptojacking", "WIFI Cracking",
                    "Zero-Day", "Buffer Overflow", "Race Condition",
                    "Memory Corruption", "Zero Trust",
                    "HTTP Response Splitting", "JWT", "OAuth 2.0", "TOTP",
                    "MFA", "Multi-factor Authentication", "LDAP", "WIFI",
                    "ARP Spoofing", "Reverse Engineering", "Vishing",
                    "Phishing", "Whaling", "Social Engineering",
                    "Privilege Escalation", "Patch Management",
                    "Side-Channel Attacks", "Cryptographic Weaknesses",
                    "MITM", "SRTP", "DNSSEC", "Insecure APIs",
                    "Mobile Malware", "APTs", "Advanced Persistent Threats",
                    "Malware", "Rootkit", "Trojan Horse", "RAT", "Spyware",
                    "Adware", "Virus", "Worm", "Botnet", "XSS Filter Bypass",
                    "SQLi", "Security Misconfiguration", "Security Patch",
                    "Vulnerability Management", "Security Audits",
                    "Packet Sniffing", "Credential Stuffing",
                    "Session Hijacking", "Remote Code Execution",
                    "Command Execution", "File Inclusion",
                    "Local File Inclusion", "Remote File Inclusion"]
    capitalized_words = re.findall(r'\b[A-Z][a-zA-Z0-9-]+\b', description)
    for word in capitalized_words:
        if word in common_terms and word not in keywords:
            keywords.append(word)

    return keywords[:3]  # Retourne max 3 mots-clés


@csrf_exempt
@api_view(['GET'])
def top_cve(request):
    try:
        response = requests.get(API_URL)
        data = response.json()
        cve_list = data.get("vulnerabilities", [])
        sorted_cve = sorted(
            cve_list,
            key=lambda x: x["cve"]["published"],
            reverse=True
        )[:5]

        result = []
        for item in sorted_cve:
            cve_info = item["cve"]
            cve_id = cve_info["id"]
            description = next(
                (desc["value"] for desc in cve_info.get("descriptions", []) if desc["lang"] == "en"),
                "No description available"
            )
            metrics = cve_info.get("metrics", {}).get("cvssMetricV2", [])
            severity = metrics[0].get("baseSeverity") if metrics else "Unknown"
            topics = extract_topics(description)
            result.append({
                "id": cve_id,
                "name": cve_id,
                "description": description,
                "url": f"https://nvd.nist.gov/vuln/detail/{cve_id}",
                "severity": severity,
                "topics": topics
            })

        return Response(result)

    except Exception as e:
        return Response({"error": str(e)}, status=500)


@csrf_exempt
@api_view(['GET'])
def GetAllCve(request):
    try:
        response = requests.get(API_URL)
        data = response.json()
        cve_list = data.get("vulnerabilities", [])
        sorted_cve = sorted(
            cve_list,
            key=lambda x: x["cve"]["published"],
            reverse=True
        )
        result = []
        for item in sorted_cve:
            cve_info = item["cve"]
            cve_id = cve_info["id"]
            description = next(
                (desc["value"] for desc in cve_info.get("descriptions", []) if desc["lang"] == "en"),
                "No description available"
            )
            metrics = cve_info.get("metrics", {}).get("cvssMetricV2", [])
            severity = metrics[0].get("baseSeverity") if metrics else "Unknown"
            topics = extract_topics(description)
            result.append({
                "id": cve_id,
                "name": cve_id,
                "description": description,
                "url": f"https://nvd.nist.gov/vuln/detail/{cve_id}",
                "severity": severity,
                "topics": topics
            })

        return Response(result)

    except Exception as e:
        return Response({"error": str(e)}, status=500)
