package ssafy.eagerbeaver.util;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtil {

	// public으로 해야 할 이유 있음?
	private static final String AUTHORIZATION_HEADER = "Authorization";
	private static final String BEARER_PREFIX = "Bearer ";
	private static final long EXPIRATION_TIME = 60 * 60 * 1000L;
	private static final SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS256;

	@Value("${jwt.secretKey}")
	private String secretKey;

	public String generateJwt(String email) {
		Date expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_TIME);

		return Jwts.builder()
			.claim("email", email) // claim 추가할 경우 수정 필요
			.setIssuedAt(new Date())
			.setExpiration(expirationDate)
			.signWith(SIGNATURE_ALGORITHM, secretKey)
			.compact();
	}

	public String getJwtFromHeader(HttpServletRequest request) {
		String bearerToken = request.getHeader(AUTHORIZATION_HEADER);

		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_PREFIX)) {
			return bearerToken.substring(7);
		}
		return null;
	}

	public boolean validateJwt(String jwt) {
		try {
			Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwt).getBody();
			return true;
		} catch (MalformedJwtException | SecurityException e) {
			log.error("Invalid JWT signature");
		} catch (ExpiredJwtException e) {
			log.error("Expired JWT token");
		} catch (UnsupportedJwtException e) {
			log.error("Unsupported JWT token");
		} catch (IllegalArgumentException e) {
			log.error("Empty JWT token");
		}
		return false;
	}
}










